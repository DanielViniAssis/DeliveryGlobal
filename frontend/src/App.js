import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import { createOrder } from './services/orderService';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
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

  const checkout = async () => {
  const orderData = {
    customer_name: "Daniel",
    items: cart.map(item => ({ product_id: item.id, quantity: item.quantity })),
  };

  try {
    await fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    setCart([]);
    alert("Pedido realizado com sucesso!");
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
