/* 
   array email dirender jadi baris tabel SEKALI di awal (feature 1).
   abis itu yang jadi patokan itu baris baris <tr> di DOM.
   status tiap email disimpen pake class di <tr> nya
     unread  = belum dibaca
     starred = dikasih bintang
     urgent  = subjeknya ada kata URGENT / IMPORTANT
     hidden  = lagi disembunyiin filter
     selected = lagi dicentang
   id email disimpen di atribut data-id (dataset)

   aspek 1 selecting      -> querySelector, querySelectorAll
   aspek 2 konten/atribut -> textContent, innerHTML, dataset, .value, .checked
   aspek 3 class/style    -> classList add, remove, toggle, contains
   aspek 4 event          -> addEventListener, e.target, preventDefault, event delegation
   aspek 5 node           -> createElement, appendChild, prepend, remove
   
/* ASPEK 1: SELECTING ELEMENTS */
const emailList = document.querySelector('#email-list');
const unreadCount = document.querySelector('#unread-count');
const starredCount = document.querySelector('#starred-count');
const searchInput = document.querySelector('#search-input');
const filterButtons = document.querySelectorAll('.filter-btn'); // NodeList, isinya 3 tombol
const selectAll = document.querySelector('#select-all');
const bulkBar = document.querySelector('#bulk-bar');
const selectedCount = document.querySelector('#selected-count');
const btnMarkRead = document.querySelector('#btn-mark-read');
const btnDeleteSelected = document.querySelector('#btn-delete-selected');
const emptyState = document.querySelector('#empty-state');
const composeModal = document.querySelector('#compose-modal');
const composeForm = document.querySelector('#compose-form');
const btnCompose = document.querySelector('#btn-compose');
const btnCancel = document.querySelector('#btn-cancel');
const senderInput = document.querySelector('#compose-sender');
const subjectInput = document.querySelector('#compose-subject');
const bodyInput = document.querySelector('#compose-body');


let activeFilter = 'all';

const getRows = () => [...emailList.children];

const getVisibleRows = () => getRows().filter(row => !row.classList.contains('hidden'));
const getCheckedRows = () => getRows().filter(row => row.querySelector('.row-check').checked);

const isPriority = (subject) => {
    const upper = subject.toUpperCase();
    return upper.includes('URGENT') || upper.includes('IMPORTANT');
};

// jam sekarang
const getCurrentTime = () => new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });


/* FEATURE 1: RENDER EMAIL DARI ARRAY */
function createEmailRow(email) {
    const row = document.createElement('tr');
    row.classList.add('email-row');
    row.dataset.id = email.id; // jadi atribut data-id="1" di html

    if (!email.isRead) row.classList.add('unread');
    if (email.isStarred) row.classList.add('starred');
    if (isPriority(email.subject)) row.classList.add('urgent');

    row.innerHTML = `
        <td class="col-check"><input type="checkbox" class="row-check" aria-label="Pilih email"></td>
        <td class="col-star"><button type="button" class="btn-star" aria-label="Bintangi email">★</button></td>
        <td class="col-sender"></td>
        <td class="col-content">
            ${isPriority(email.subject) ? '<span class="tag-priority">HIGH PRIORITY</span>' : ''}<span class="subject"></span>
            <p class="preview"></p>
        </td>
        <td class="col-date"></td>
        <td class="col-action"><button type="button" class="btn-delete">Delete</button></td>
    `;

    row.querySelector('.col-sender').textContent = email.sender;
    row.querySelector('.subject').textContent = email.subject;
    row.querySelector('.preview').textContent = email.body;
    row.querySelector('.col-date').textContent = email.date;

    return row; 
}

function renderEmails(emails) {
    emailList.innerHTML = ''; 
    emails.forEach(email => {
        emailList.appendChild(createEmailRow(email)); // aspek 5: masukin ke paling bawah
    });
}

function updateCounters() {
    unreadCount.textContent = emailList.querySelectorAll('.email-row.unread').length;
    starredCount.textContent = emailList.querySelectorAll('.email-row.starred').length;
}


/* FEATURE 2: CHECKBOX, SELECT ALL, BULK BAR */
function updateSelectionUI() {
    const checkedRows = getCheckedRows();
    const visibleRows = getVisibleRows();
    const visibleChecked = visibleRows.filter(row => row.querySelector('.row-check').checked);

    getRows().forEach(row => {
        row.classList.toggle('selected', row.querySelector('.row-check').checked);
    });

    // bulk bar cuma muncul kalo minimal ada 1 yang dicentang
    bulkBar.classList.toggle('hidden', checkedRows.length === 0);
    selectedCount.textContent = `${checkedRows.length} item(s) selected`;

    selectAll.checked = visibleRows.length > 0 && visibleChecked.length === visibleRows.length;
    selectAll.indeterminate = visibleChecked.length > 0 && visibleChecked.length < visibleRows.length;
    selectAll.disabled = visibleRows.length === 0;
}
selectAll.addEventListener('change', () => {
    getVisibleRows().forEach(row => {
        row.querySelector('.row-check').checked = selectAll.checked;
    });
    updateSelectionUI();
});

btnMarkRead.addEventListener('click', () => {
    getCheckedRows().forEach(row => {
        row.classList.remove('unread');
        row.querySelector('.row-check').checked = false; // abis itu centangnya dilepas
    });
    refreshUI();
});

btnDeleteSelected.addEventListener('click', () => {
    getCheckedRows().forEach(row => row.remove()); // aspek 5
    refreshUI();
});


/* FEATURE 3 */
emailList.addEventListener('click', (e) => {
    const row = e.target.closest('.email-row');
    if (!row) return; // kalo yang diklik bukan bagian dari baris email, udah, berhenti

    if (e.target.closest('.btn-star')) {
        // klik bintang -> nyala/mati
        row.classList.toggle('starred');
    } else if (e.target.closest('.btn-delete')) {
        // klik delete -> hapus baris ini aja
        row.remove();
    } else if (e.target.closest('.col-check')) {
        // klik di kolom checkbox -> urusan centang, bukan baca/belum baca
        // kalo yang diklik kotak kolomnya (bukan checkbox nya), centangnya kita balik manual
        const checkbox = row.querySelector('.row-check');
        if (e.target !== checkbox) checkbox.checked = !checkbox.checked;
        updateSelectionUI();
        return; // counter ga berubah, jadi langsung berhenti
    } else {
        row.classList.toggle('unread');
    }

    refreshUI();
});


/* FEATURE 4: SEARCH + FILTER */
function applyFilter() {
    const keyword = searchInput.value.trim().toLowerCase();

    getRows().forEach(row => {
        const sender = row.querySelector('.col-sender').textContent.toLowerCase();
        const subject = row.querySelector('.subject').textContent.toLowerCase();

        const cocokKeyword = sender.includes(keyword) || subject.includes(keyword);

        let cocokKategori = true;
        if (activeFilter === 'unread') cocokKategori = row.classList.contains('unread');
        if (activeFilter === 'starred') cocokKategori = row.classList.contains('starred');

        const tampil = cocokKeyword && cocokKategori;
        row.classList.toggle('hidden', !tampil);

        if (!tampil) row.querySelector('.row-check').checked = false;
    });

    emptyState.classList.toggle('hidden', getVisibleRows().length > 0);
    updateSelectionUI();
}

searchInput.addEventListener('input', applyFilter);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        activeFilter = button.dataset.filter; // ambil dari data-filter="..." di html

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        applyFilter();
    });
});


/* FEATURE 5: COMPOSE */
function openCompose() {
    composeModal.classList.remove('hidden');
    senderInput.focus(); 
}

function closeCompose() {
    composeModal.classList.add('hidden');
    composeForm.reset(); 
}

btnCompose.addEventListener('click', openCompose);
btnCancel.addEventListener('click', closeCompose);

composeModal.addEventListener('click', (e) => {
    if (e.target === composeModal) closeCompose();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !composeModal.classList.contains('hidden')) closeCompose();
});

composeForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    [senderInput, subjectInput, bodyInput].forEach(input => {
        input.value = input.value.trim();
    });
    if (!composeForm.reportValidity()) return;

    const newEmail = {
        id: Date.now().toString(), 
        sender: senderInput.value,
        subject: subjectInput.value,
        body: bodyInput.value,
        date: getCurrentTime(),
        isRead: false,
        isStarred: false
    };

   
    const newRow = createEmailRow(newEmail);
    newRow.classList.add('just-added'); 

    emailList.prepend(newRow);

    closeCompose();
    refreshUI();
});


function refreshUI() {
    updateCounters();
    applyFilter(); 
}

renderEmails(initialEmails);
refreshUI();
