<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password' => Hash::make('password'),
        // ]);
        \App\Models\Admin::create([
            'email' => 'kyudou1106@gmail.com',
            'name' => '江口 優作',
            'password' => Hash::make('password'),
        ]);

        // User::factory()->count(10)->create();
        // Post::factory()->count(20)->create();
    }
}
