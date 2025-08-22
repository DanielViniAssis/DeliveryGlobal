import React from 'react';
import CartItem from '../components/CartItem';

const Cart = ({ cart, increase, decrease, remove, checkout }) => {
  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  const handleCheckout = async (total) => {
    try {
      await checkout(total);
      alert("Pedido criado com sucesso!");
    } catch (error) {
      alert("Erro ao criar pedido.");
    }
  };

  return (
    <div className="container-fluid" style={{ minHeight: '100vh' }}>
      <div className="container py-4" >
        
        <h1 className="text-center mb-4">Meu Carrinho</h1>

        {/*Caso o carrinho esteja vazio aparecerá essa mensagem */}
        {cart.length === 0 ? (
          <div className="card text-center p-4">
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione alguns itens para começar!</p>
          </div>
        ) : (
          <>
          {/* Lista de itens */}
          <div className="card mb-4" style={{backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
            <div className="card-body">
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                increase={increase}
                decrease={decrease}
                remove={remove}
              />
              ))}
            </div>
          </div>

            {/* Total e botão */}
            <div className="card text-center" style={{backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
            <div className="card-body">
              <h2 className="text-success mb-3">
                Total: R$ {total.toFixed(2)}
              </h2>
              
              <button 
                onClick={() => handleCheckout(total)}
                className="btn btn-success btn-lg"
              >
                Finalizar Pedido
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;