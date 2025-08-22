import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === products.id);
      if (exists) {
        return prev.map(item =>
          item.id === products.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...products, quantity: 1 }];
      }
    });
  };

  const increase = (id) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrease = (id) => {
    setCart(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
         .filter(item => item.quantity > 0)
    );
  };

  const remove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const checkout = async (total) => {
  const orderData = {
    customer_name: "Daniel",
    items: cart.map(item => ({ products_id: item.id, quantity: item.quantity, price: item.price })),
    total: total,
  };

  try {
    const response = await fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();
    setCart([]);
    alert("Pedido realizado com sucesso!");
    return data;
  } catch (error) {
    alert("Erro ao finalizar pedido");
  }
};

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} increase={increase} decrease={decrease} remove={remove} checkout={checkout} />}/>
      </Routes>
    </Router>
  );
}

export default App;
