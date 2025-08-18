import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = ({ addToCart }) => {
  const highlights = products.slice(0, 3); // destaques do dia

  return (
    <div>
      <h1>Bem-vindo ao SuperFood!</h1>

      <h2>Destaques do dia</h2>
      <div style={{ display: 'flex' }}>
        {highlights.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <h2>Banners promocionais</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        <img src="banner1.jpg" alt="Promo 1" style={{ width: '300px', margin: '5px' }} />
        <img src="banner2.jpg" alt="Promo 2" style={{ width: '300px', margin: '5px' }} />
        <img src="banner3.jpg" alt="Promo 3" style={{ width: '300px', margin: '5px' }} />
      </div>
    </div>
  );
};

export default Home;
