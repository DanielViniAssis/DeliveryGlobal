import React from 'react';

const CartItem = ({ item, increase, decrease, remove }) => {
 return (
    <div style={{ border: "1px solid #ddd", margin: 5, padding: 5 }}>
      <h4>{item.name}</h4>
      <p>Preço: R$ {item.price}</p>
      <p>Quantidade: {item.quantity}</p>
      <button onClick={() => increase(item.id)}>+</button>
      <button onClick={() => decrease(item.id)}>-</button>
      <button onClick={() => remove(item.id)}>Remover</button>
    </div>
  );
};

export default CartItem;
