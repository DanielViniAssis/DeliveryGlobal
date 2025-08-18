import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Menu = ({ addToCart }) => {
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
