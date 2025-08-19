<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;

class OrderController extends Controller
{
    // GET /api/orders
    public function index()
    {
        $orders = Order::with('items.product')->get();
        return response()->json($orders);
    }

    // POST /api/orders
    public function store(Request $request)
    {
        // Validação simples
        $request->validate([
            'customer_name' => 'required|string|max:255',
            'items' => 'required|array|min:1',
            'items.*.product_id' => 'required|integer|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        // Cria pedido
        $order = Order::create([
            'customer_name' => $request->input('customer_name'),
        ]);

        // Cria itens
        foreach ($request->input('items') as $item) {
            $product = Product::find($item['product_id']);
            if ($product) {
                $quantity = $item['quantity'];
                $price = $product->price;
                $total = $quantity * $price;
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'price' => $product->price,
                    'total' => $total, 
                ]);
            }
        }
        $orderTotal = $order->items()->sum('total');
        $order->update(['total' => $orderTotal]);

        return response()->json($order->load('items.product'), 201);
    }
}
