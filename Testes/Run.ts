// import { Customer } from '../Class/Customer';
// import { ShopProduct } from '../Class/ShopProduct';
// import { OrderItem } from '../Class//OrderItem';
// import { Order } from '../Class/Order';

import { Customer } from "../Class/Customer";
import { Order } from "../Class/Order";
import { OrderItem } from "../Class/OrderItem";
import { Product } from "../Class/Product";
import { ShopProduct } from "../Class/ShopProduct";

// const customers: Customer[] = [
//   new Customer('Alice Silva', 'alice@email.com', 'alice123', 'password', 1000),
//   new Customer('Bruno Souza', 'bruno@email.com', 'bruno456', 'password', 500),
//   new Customer('Carla Mendes', 'carla@email.com', 'carla789', 'password', 1200),
//   new Customer('Daniel Rocha', 'daniel@email.com', 'daniel321', 'password', 700),
//   new Customer('Elaine Costa', 'elaine@email.com', 'elaine654', 'password', 1500)
// ];

// const shopProducts: ShopProduct[] = [
//   new ShopProduct(50, 100, 10, 'Notebook', 'Laptop potente', 5),
//   new ShopProduct(30, 105, 5, 'Teclado Mecânico', 'Teclado gamer RGB', 2),
//   new ShopProduct(20, 100, 0, 'Mouse Sem Fio', 'Mouse ergonômico', 1),
//   new ShopProduct(15, 850, 5, 'Fone Bluetooth', 'Fone de ouvido com redução de ruído', 3),
//   new ShopProduct(100, 1000, 50, 'Monitor 27"', 'Monitor Full HD', 8),
//   new ShopProduct(80, 6, 5, 'Cadeira Gamer', 'Conforto e ergonomia', 10),
//   new ShopProduct(40, 12, 5, 'Webcam HD', 'Câmera de alta definição', 4),
//   new ShopProduct(25, 7, 8, 'Microfone Condensador', 'Ideal para streaming', 3),
//   new ShopProduct(10, 3, 2, 'Suporte para Notebook', 'Ajustável e portátil', 1),
//   new ShopProduct(5, 9, 20, 'Mouse Pad', 'Superfície antiderrapante', 0)
// ];

// const ordemItems: OrderItem[] = [
//   new OrderItem(shopProducts[0].id, 2, shopProducts, true),
//   new OrderItem(shopProducts[1].id, 1, shopProducts, true),
//   new OrderItem(shopProducts[2].id, 1, shopProducts, false),
//   new OrderItem(shopProducts[3].id, 3, shopProducts, true),
//   new OrderItem(shopProducts[4].id, 1, shopProducts, false),
//   new OrderItem(shopProducts[5].id, 2, shopProducts, true),
//   new OrderItem(shopProducts[6].id, 1, shopProducts, true),
//   new OrderItem(shopProducts[7].id, 2, shopProducts, true),
//   new OrderItem(shopProducts[8].id, 1, shopProducts, true),
//   new OrderItem(shopProducts[9].id, 2, shopProducts, true),
//   new OrderItem(shopProducts[1].id, 2, shopProducts, true),
//   new OrderItem(shopProducts[3].id, 1, shopProducts, true)
// ];

// const order: Order[] = [
//   new Order(customers[0].id, customers),
//   new Order(customers[0].id, customers),
//   new Order(customers[1].id, customers),
//   new Order(customers[2].id, customers),
//   new Order(customers[3].id, customers),
//   new Order(customers[4].id, customers)
// ];

// order[0].itens.push(ordemItems[0], ordemItems[1]);
// order[1].itens.push(ordemItems[2], ordemItems[3]);
// order[2].itens.push(ordemItems[4], ordemItems[5]);
// order[3].itens.push(ordemItems[6], ordemItems[7]);
// order[4].itens.push(ordemItems[8], ordemItems[9]);
// order[5].itens.push(ordemItems[10], ordemItems[11]);

// console.log('Mostrar 2 Customers:');
// customers[0].userInfo();
// customers[1].userInfo();

// console.log('Mostrar 2 produtos:');
// shopProducts[2].detailsLog();
// shopProducts[3].detailsLog();

// console.log('Agora mostrar em formato de API: ',
// shopProducts[4].detailsAPI());

// console.log('Agora Exemplo de Order: ',
// order[5].orderTotalPrice());

// console.log('Agora exemplo de lista de clientes: ',
// customers[2].showOrders(customers, order));

console.log('Parte dos Produto');
const product1 = new Product("Skol Beats")
const product2 = new Product("Coca Zero")

product1.detailsLog();
product2.detailsLog();

console.log('Parte dos Shop Produtos');
const shopProduct1 = new ShopProduct(product1, 10, 50, 0)
const shopProduct2 = new ShopProduct(product2, 6, 20, 0)
const shopProduct3 = new ShopProduct({name: "Guarana", description: "Refrigerante de Guarana"}, 20, 6, 10)

shopProduct1.detailsLog();
shopProduct2.detailsLog();

console.log('Parte do Customer');
const customer = new Customer("Lucas", "lcsflrs@gmail.com", "lcsflrs", "123123123")

console.log('Parte dos pedidos')
const orderItem1 = new OrderItem(2, shopProduct1)
const orderItem2 = new OrderItem(3, shopProduct2)

// orderItem1.detailsLog()
// orderItem2.detailsLog()

console.log('Parte final');
const order = new Order(customer)