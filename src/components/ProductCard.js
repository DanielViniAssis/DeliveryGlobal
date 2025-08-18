import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductCard;
