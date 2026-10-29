<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Validation extends Model
{
    protected $table = 'validations';
    public $timestamps = false;
    protected $guarded = ['id'];

    public function society()
    {
        return $this->belongsTo(Society::class, 'society_id');
    }

    public function validator()
    {
        return $this->belongsTo(Validator::class, 'validator_id');
    }
}
