<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        DB::table('products')->insert([['name' => 'Pizza Calabresa', 'description' => 'Pizza de calabresa acebolada', 'price' => 39.90, 'image' => '/images/pizzaCalabresa.png'],
        ['name' => 'Pizza Napolitana', 'description' => 'Pizza molho de tomate, mussarela, rodelas de tomate, parmessão, orégano.', 'price' => 37.0, 'image' => '/images/pizzaNapolitana.png'],
        ['name' => 'X-Tudo', 'description' => 'Hambúrguer artesanal', 'price' => 25.00, 'image' => '/images/Lanche.png'],
        ['name' => 'Refrigerante', 'description' => 'Guaraná 600ML', 'price' => 15.5, 'image' => '/images/guarana.png'],
        ['name' => 'Pastel de Carne', 'description' => 'Pastel recheado de Carne com Tempero da casa', 'price' => 8.00, 'image' => '/images/pastelCarne.png'],
        ['name' => 'Sobremesa', 'description' => 'Pudim de leite condensado', 'price' => 12.00, 'image' => '/images/pudim.png'],]);
    }
}
