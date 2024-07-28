<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::query()->create([
           'name' => 'Noor',
           'email' => 'admin@webook.com',
           'password' => Hash::make('123456789'),
        ]);
    }
}
