import React from 'react';

const CartItem = ({ item, increase, decrease, remove }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
      <p style={{ flex: 2 }}>{item.name}</p>
      <p style={{ flex: 1 }}>R$ {item.price.toFixed(2)}</p>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <button onClick={() => decrease(item.id)}>-</button>
        <span style={{ margin: '0 10px' }}>{item.quantity}</span>
        <button onClick={() => increase(item.id)}>+</button>
      </div>
      <button style={{ flex: 0.5 }} onClick={() => remove(item.id)}>Remover</button>
    </div>
  );
};

export default CartItem;
