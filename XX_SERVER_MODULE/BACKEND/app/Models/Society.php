<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Society extends Model
{
    protected $table = 'societies';
    public $timestamps = false;
    protected $guarded = ['id'];
    protected $hidden = ['password'];
    public function regional()
    {
        return $this->belongsTo(Regional::class, 'regional_id');
    }
    public function validation()
    {
        return $this->hasOne(Validation::class, 'society_id');
    }
    public function applications()
    {
        return $this->hasMany(InstallmentApplySociety::class, 'society_id');
    }
}
