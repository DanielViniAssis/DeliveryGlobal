
export function api(){
  return fetch ("http://localhost:8000/api").then(res => res.json()); // porta do backend
  
};

// api.js
export function pegarProdutos() {
  return fetch('http://localhost:8000/api/products') // URL do backend
    .then(res => res.json());
}

export function pegarPreco(nome) {
  return pegarProdutos().then(data => data.find(item => item.nome === nome));
}


export default api;
