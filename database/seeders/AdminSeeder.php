<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $SuperAdmimn=   User::create([
                    'name'     =>  'Alhassane Diallo',
                    'phone'     => '91919083',
                    'email'     => 'alasko3233@gmail.com',
                    'genre'     => 'male',
                    'password'  =>Hash::make('alasko3233'),
                    'created_at' => Carbon::now(),
                ]);

            $SuperAdmimn->assignRole('Super Admin');



    }
}
