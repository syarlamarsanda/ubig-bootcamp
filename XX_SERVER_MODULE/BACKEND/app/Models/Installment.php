<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Installment extends Model
{
    protected $table = 'installment';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function brand()
    {
        return $this->belongsTo(Brand::class, 'brand_id');
    }

    public function availableMonths()
    {
        return $this->hasMany(AvailableMonth::class, 'installment_id');
    }
}
