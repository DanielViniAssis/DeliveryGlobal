import React from 'react';
import { GetProduct } from '../services/api'; 


const ProductCard = ({ products, addToCart }) => {
  const handleClick = () => {
  addToCart({ ...products, price: Number(products.price) });
  alert(`Adicionado ao carrinho: ${products.name}`);
};

  return (
    <div className="card m-2 shadow hover-card" style={{ width: '18rem' }}>
      <img src={products.image} className="card-img-top" alt={products.name} />
      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">{products.description}</p>
        <p className="card-text"><strong>R$ {products.price ? Number(products.price).toFixed(2) : '0.00'}</strong></p>
        <button className="btn btn-primary shadow-sm hover-shadow" onClick={handleClick}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default ProductCard;
