# 🍔 SuperFood - Delivery  

Projeto Full Stack de um sistema de delivery online.  

O sistema permite que o usuário visualize os destaques do dia, confira o cardápio com produtos disponíveis e gerencie seu carrinho de compras até a finalização do pedido.  

<img width="1600" height="748" alt="image" src="https://github.com/user-attachments/assets/9eae99be-3224-486d-b0e3-2b8f76c62862" />

<img width="1600" height="724" alt="image" src="https://github.com/user-attachments/assets/d03be35f-1405-4ed6-b460-2f8ccafff858" />




---

## 💻 Tecnologias  

- **Frontend:** React  
- **Backend:** PHP (Laravel)  
- **Banco de Dados:** MySQL  

---

## 🚀 Como iniciar o projeto  

### 1. Clonar o repositório  
```bash
git clone https://github.com/seu-usuario/superfood-delivery.git
````
## Backend Laravel
```bash
cd backend
composer install
cp .env.example .env
php artisan migrate
php artisan db:seed --class=ProductSeeder
php artisan db:seed --class=PromoSeeder  
php artisan serve
````
## Frontend 
```bash
cd frontend
npm install
npm start
````
## Estrutura do projeto
```bah
superfood-delivery/
├── backend/        # API em Laravel
├── frontend/       # Interface em React
````
