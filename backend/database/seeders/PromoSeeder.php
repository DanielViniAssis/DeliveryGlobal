<?php

namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PromoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('promo')->insert([['name' => 'Promo1', 'description' => 'Promoção Pizza G', 'image' => 'images/MenuCardapioPromocional.png'],
        ['name' => 'Promo2', 'description' => 'Promoção combo', 'image' => 'images/promoComboLanche.png'],
        ['name' => 'Promo3', 'description' => 'Promoção 2 pasteis', 'image' => 'images/promoPastel.png'],]);
    }
}
