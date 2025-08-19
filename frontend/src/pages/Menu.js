import React, { useEffect, useState } from "react";
import ProductCard from '../components/ProductCard';
import { pegarProdutos } from '../services/api';

const Menu = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    pegarProdutos()
      .then(data => setProducts(data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div>
      <h1>Cardápio</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
