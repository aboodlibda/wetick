<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function tickets()
    {
        return $this->belongsToMany(Ticket::class)
            ->withPivot('count') // Include the 'count' field from the pivot table
            ->withTimestamps();
    }
}
