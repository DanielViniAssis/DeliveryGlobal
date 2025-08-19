import pizzaCalabresa from '../assets/images/pizzaCalabresa.png';
import pizzaNapolitana from '../assets/images/pizzaNapolitana.png';
import lanche from '../assets/images/Lanche.png';
import guarana from '../assets/images/guarana.png';
import pastelCarne from '../assets/images/pastelCarne.png';
import pudim from '../assets/images/pudim.png';

const products = [
    { id: 1, name: 'Pizza Calabresa', description: 'Pizza de calabresa acebolada', price: 39.9, image: pizzaCalabresa},
    { id: 2, name: 'Pizza Napolitana', description: 'Pizza molho de tomate, mussarela, rodelas de tomate, parmessão, orégano.', price: 37.0, image: pizzaNapolitana},
    { id: 3, name: 'X-Tudo', description: 'Hambúrguer artesanal', price: 25.0, image: lanche},
    { id: 4, name: 'Refrigerante', description: 'Guaraná 600ML', price: 15.5, image: guarana },
    { id: 5, name: 'Pastel de Carne', description: 'Pastel recheado de Carne com Tempero da casa', price: 8.0, image: pastelCarne },
    { id: 6, name: 'Sobremesa', description: 'Pudim de leite condensado', price: 12.0, image: pudim },
  ];
  
  export default products;
  