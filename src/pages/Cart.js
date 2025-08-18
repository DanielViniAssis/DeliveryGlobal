import React from 'react';
import CartItem from '../components/CartItem';

const Cart = ({ cart, increase, decrease, remove, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Carrinho</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              increase={increase}
              decrease={decrease}
              remove={remove}
            />
          ))}
          <h2>Total: R$ {total.toFixed(2)}</h2>
          <button onClick={checkout}>Finalizar Pedido</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
