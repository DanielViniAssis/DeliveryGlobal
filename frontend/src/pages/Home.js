import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import promoPizza from '../assets/images/MenuCardapioPromocional.png';
import promoLanche from '../assets/images/promoComboLanche.png';
import promoPasteis from '../assets/images/promoPastel.png';
import { pegarProdutos } from '../services/api'; 
import product from '../data/products.js'; 
const Home = ({ addToCart }) => {
  const [produtos, setProdutos] = useState([]);

  // Função para buscar produtos direto do backend
  const carregarProdutos = () => {
    pegarProdutos().then(data => {
      setProdutos(data);
    }).catch(err => console.error('Erro ao carregar produtos:', err));
  };

  return (
    <div style={{justifyContent: 'center', textAlign: 'center', justifyItems: 'center'}}>
      <h1>Bem-vindo ao SuperFood!</h1>

      <h2>Destaques do dia</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {product.slice(0, 3).map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <h2>Promoções</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        <img src={promoPizza} alt="Promo 1" style={{ width: '300px', margin: '5px' }} />
        <img src={promoLanche} alt="Promo 2" style={{ width: '300px', margin: '5px' }} />
        <img src={promoPasteis} alt="Promo 3" style={{ width: '300px', margin: '5px' }} />
      </div>
    </div>
  );
};

export default Home;
