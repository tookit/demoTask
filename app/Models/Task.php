<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'task';

    public $fillable = [
        'name','priority', 'project_id'
    ];

    public function scopeOrdered($query)
    {
        return $query->orderBy('priority', 'desc');
    }    


    public  function project()
    {
        return $this->belongsTo(Project::class);
    }


    public function owner()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
