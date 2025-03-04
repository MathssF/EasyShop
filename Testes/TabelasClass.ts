import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { Customer } from '../Class/Customer';
import { ShopProduct } from '../Class/ShopProduct';
import { OrderItem } from '../Class//OrderItem';
import { Order } from '../Class/Order';

// Criando 5 clientes
const customers: Customer[] = [
  new Customer('Alice Silva', 'alice@email.com', 'alice123', 'password', 1000),
  new Customer('Bruno Souza', 'bruno@email.com', 'bruno456', 'password', 500),
  new Customer('Carla Mendes', 'carla@email.com', 'carla789', 'password', 1200),
  new Customer('Daniel Rocha', 'daniel@email.com', 'daniel321', 'password', 700),
  new Customer('Elaine Costa', 'elaine@email.com', 'elaine654', 'password', 1500)
];

// Criando 10 produtos (8 com estoque, 2 sem)
const products: ShopProduct[] = [
  new ShopProduct(50, 10, 10, 'Notebook', 'Laptop potente', 5),
  new ShopProduct(30, 5, 405, 'Teclado Mecânico', 'Teclado gamer RGB', 2),
  new ShopProduct(20, 0, 0, 'Mouse Sem Fio', 'Mouse ergonômico', 1),
  new ShopProduct(15, 8, 1200, 'Fone Bluetooth', 'Fone de ouvido com redução de ruído', 3),
  new ShopProduct(100, 0, 50, 'Monitor 27"', 'Monitor Full HD', 8),
  new ShopProduct(80, 6, 155, 'Cadeira Gamer', 'Conforto e ergonomia', 10),
  new ShopProduct(40, 12, 75, 'Webcam HD', 'Câmera de alta definição', 4),
  new ShopProduct(25, 7, 8, 'Microfone Condensador', 'Ideal para streaming', 3),
  new ShopProduct(10, 3, 2, 'Suporte para Notebook', 'Ajustável e portátil', 1),
  new ShopProduct(5, 9, 200, 'Mouse Pad', 'Superfície antiderrapante', 0)
];

// Criando 12 OrderItems
const orderItems: OrderItem[] = [
  new OrderItem(products[0].id, 2, products, true),
  new OrderItem(products[1].id, 1, products, true),
  new OrderItem(products[2].id, 1, products, false),
  new OrderItem(products[3].id, 3, products, true),
  new OrderItem(products[4].id, 1, products, false),
  new OrderItem(products[5].id, 2, products, true),
  new OrderItem(products[6].id, 1, products, true),
  new OrderItem(products[7].id, 2, products, true),
  new OrderItem(products[8].id, 1, products, true),
  new OrderItem(products[9].id, 2, products, true),
  new OrderItem(products[1].id, 2, products, true),
  new OrderItem(products[3].id, 1, products, true)
];

// Criando 6 Orders (um cliente com 2, o restante com 1)
const orders: Order[] = [
  new Order(customers[0].id, customers),
  new Order(customers[0].id, customers),
  new Order(customers[1].id, customers),
  new Order(customers[2].id, customers),
  new Order(customers[3].id, customers),
  new Order(customers[4].id, customers)
];

// Adicionando itens às ordens
orders[0].itens.push(orderItems[0], orderItems[1]);
orders[1].itens.push(orderItems[2], orderItems[3]);
orders[2].itens.push(orderItems[4], orderItems[5]);
orders[3].itens.push(orderItems[6], orderItems[7]);
orders[4].itens.push(orderItems[8], orderItems[9]);
orders[5].itens.push(orderItems[10], orderItems[11]);

console.log('Clientes:', customers);
console.log('Produtos:', products);
console.log('Itens de Pedido:', orderItems);
console.log('Pedidos:', orders);

export { customers, products, orderItems, orders };