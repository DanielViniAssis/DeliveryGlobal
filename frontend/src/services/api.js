
  export function api(){
    return fetch ("http://localhost:8000/api").then(res => res.json()); // porta do backend
    
  };

  // api.js
  export function listProducts() {
    return fetch('http://localhost:8000/api/products') // URL do backend
      .then(res => res.json());
  }

  export function GetProduct(nome) {
    return listProducts().then(data => {
      const products = data.find(item => item.nome === nome);
      if (products) {
        return {
          ...products,
          imageUrl: `http://localhost:8000/${products.image}`
        };
      }
    });
  }

  export function urlPromo(){
    return fetch('http://localhost:8000/api/promo') 
      .then(res => res.json());
  }

  export async function pegarPromocoes() {
    const promos = await urlPromo();
    
    // Adiciona a URL da imagem a cada item
    return promos.map(promo => ({
      ...promo,
      promoImageUrl: `http://localhost:8000/images/${promo.image}`
    }));
  }

  export default api;
