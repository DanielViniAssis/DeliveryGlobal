import React, { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import { listProducts } from '../services/api';

const Menu = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts()
      .then(data => setProducts(data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div>
      <h1 style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center', fontSize:'bolder'}}>Cardápio</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {products.map(products => (
          <ProductCard key={products.id} products={products} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
