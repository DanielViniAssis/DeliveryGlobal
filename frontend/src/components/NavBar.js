import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/icons/home.png'
import menu from '../assets/icons/menu.png'
import cart from '../assets/icons/cart.png'
import logo from '../assets/icons/logo.png'

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{ padding: '5px', backgroundColor: '#f8f8f8', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/"><img src={logo} style={{ width: '100px', margin: '5px' }}></img></Link>
      <div class="itens-nav">
        <Link to="/"><img src={home} style={{ width: '30px', margin: '5px' }} title="Tela inicial"></img></Link>{' '}
        <Link to="/menu"><img src={menu} style={{ width: '30px', margin: '5px' }} title="Cardápio"></img></Link>{' '}
        <Link to="/cart"><img src={cart} style={{ width: '30px', margin: '5px' }} title=" Meu Carrinho"></img>({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
