import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f8f8', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Delivery</h2>
      <div>
        <Link to="/">Home</Link> |{' '}
        <Link to="/menu">Cardápio</Link> |{' '}
        <Link to="/cart">Carrinho ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
