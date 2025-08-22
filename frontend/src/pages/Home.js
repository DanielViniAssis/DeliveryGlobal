import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { listProducts, pegarPromocoes } from '../services/api';


// import product from '../data/products.js'; 
const Home = ({ addToCart }) => {
  const [products, setProdutos] = useState([]);
  const [promo, setPromocoes] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para buscar produtos direto do backend
  useEffect (() => {
    pegarPromocoes().then(promos => setPromocoes(promos));
    listProducts().then(data => {
      setProdutos(data);
    }).catch(err => console.error('Erro ao carregar produtos:', err));
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.min(products.length, 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.min(products.length, 3)) % Math.min(products.length, 3));
  };

  return (
    <div className="container-fluid" style={{ minHeight: '100vh' }}>
      <div className="container py-4">
        
        {/* Título Principal */}
        <h1 className="text-center mb-4">Bem-vindo ao SuperFood!</h1>

        {/* Carrossel Simples - Destaques do dia */}
        <h2 className="text-center mb-3">Destaques do Dia</h2>
        
        <div className="position-relative mb-5">
          <div className="d-flex justify-content-center">
            {products.length > 0 && (
              <ProductCard 
                products={products.slice(0, 3)[currentSlide]} 
                addToCart={addToCart} 
              />
            )}
          </div>
          
          {/* Botões de navegação */}
          {products.length > 1 && (
            <>
              <button 
                className="btn btn-primary position-absolute top-50 translate-middle-y"
                onClick={prevSlide}
                style={{ zIndex: 1, left: '400px' }}
              >
                ‹
              </button>
              <button 
                className="btn btn-primary position-absolute top-50 translate-middle-y"
                onClick={nextSlide}
                style={{ zIndex: 1, right: '400px' }}
              >
                ›
              </button>
            </>
          )}
          
          {/* Indicadores */}
          <div className="text-center mt-3">
            {products.slice(0, 3).map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm mx-1 ${currentSlide === index ? 'btn-primary' : 'btn-outline-primary'}`}
                onClick={() => setCurrentSlide(index)}
                style={{ width: '12px', height: '12px', borderRadius: '50%', padding: 0 }}
              />
            ))}
          </div>
        </div>

      <h2 style={{  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Promoções</h2>
      <div className="promo-card"style={{  display: 'flex', justifyContent: 'center'}}>
        {promo.slice(0, 3).map(promo =>  (
          <img key={promo.id} src={promo.image} alt={promo.name} style={{ width: '300px', margin: '5px' }} />
        )
      )}
      </div>
    </div>
    </div>
  );
};

export default Home;
