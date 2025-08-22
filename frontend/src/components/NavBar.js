import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/icons/home.png'
import menu from '../assets/icons/menu.png'
import cart from '../assets/icons/cart.png'
import logo from '../assets/icons/logo.png'

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{ padding: '2px', backgroundColor: '#cae3ebff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight:'25px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Link to="/"><img className="icons" src={logo} style={{ width: '100px', margin: '2px' }}></img></Link>
      <div class="itens-nav">
        <Link to="/"><img className="icons" src={home} style={{ width: '30px', margin: '2px' }} title="Tela inicial"></img></Link>{' '}
        <Link to="/menu"><img className="icons" src={menu} style={{ width: '30px', margin: '2px' }} title="Cardápio"></img></Link>{' '}
        <Link to="/cart"><img className="icons" src={cart} style={{ width: '30px', margin: '2px' }} title=" Meu Carrinho"></img><span id='cart-count'>{cartCount}</span></Link>
      </div>
    </nav>
  );
};

export default Navbar;
