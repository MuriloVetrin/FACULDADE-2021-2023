<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [ 'ra', 'name', 'address', 'city', 'uf', 'phone', 'course_id',];

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    public function reservation(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }
}
