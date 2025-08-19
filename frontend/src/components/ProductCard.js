import React from 'react';
import { pegarPreco } from '../services/api'; 
import product from '../data/products.js'

const ProductCard = ({ product, addToCart }) => {
  const handleClick = () => {
    pegarPreco(product.name).then(item => {
      if (item) {
        addToCart({ ...product, price: Number(item.price) }); 
      }
    });
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {product.price ? Number(product.price).toFixed(2) : '0.00'}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
