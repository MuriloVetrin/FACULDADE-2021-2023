<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [ 'title', 'subtitle', 'isbn', 'place', 'author_id', 'publisher_id', 'local', 'year', 'image'];


    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class);
    }

    public function publisher(): BelongsTo
    {
        return $this->belongsTo(Publisher::class);
    }

    public function reservation(): HasMany
    {
        return $this->hasMany(Reservation::class);
    }
}
