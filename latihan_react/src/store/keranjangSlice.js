import { createSlice } from '@reduxjs/toolkit';

const keranjangSlice = createSlice({
    name: 'keranjang',
    initialState: {
        items: [],
    },
    reducers: {
        tambahItem(state, action) {
            const ada = state.items.find((i) => i.id === action.payload.id);
            if (ada) {
                ada.jumlah++;
            } else {
                state.items.push({ ...action.payload, jumlah: 1 });
            }
        },
        hapusItem(state, action) {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
        kosongkan(state) {
            state.items = [];
        },
    },
});
export const { tambahItem, hapusItem, kosongkan } = keranjangSlice.actions;
export default keranjangSlice.reducer;
