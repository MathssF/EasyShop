import { Customer } from '../Class/Customer';
import { ShopProduct } from '../Class/ShopProduct';
import { OrderItem } from '../Class//OrderItem';
import { Order } from '../Class/Order';

const iCustomers: Customer[] = [
  new Customer('Alice Silva', 'alice@email.com', 'alice123', 'password', 1000),
  new Customer('Bruno Souza', 'bruno@email.com', 'bruno456', 'password', 500),
  new Customer('Carla Mendes', 'carla@email.com', 'carla789', 'password', 1200),
  new Customer('Daniel Rocha', 'daniel@email.com', 'daniel321', 'password', 700),
  new Customer('Elaine Costa', 'elaine@email.com', 'elaine654', 'password', 1500)
];

const iProducts: ShopProduct[] = [
  new ShopProduct(50, 100, 10, 'Notebook', 'Laptop potente', 5),
  new ShopProduct(30, 105, 5, 'Teclado Mecânico', 'Teclado gamer RGB', 2),
  new ShopProduct(20, 100, 0, 'Mouse Sem Fio', 'Mouse ergonômico', 1),
  new ShopProduct(15, 850, 5, 'Fone Bluetooth', 'Fone de ouvido com redução de ruído', 3),
  new ShopProduct(100, 1000, 50, 'Monitor 27"', 'Monitor Full HD', 8),
  new ShopProduct(80, 6, 5, 'Cadeira Gamer', 'Conforto e ergonomia', 10),
  new ShopProduct(40, 12, 5, 'Webcam HD', 'Câmera de alta definição', 4),
  new ShopProduct(25, 7, 8, 'Microfone Condensador', 'Ideal para streaming', 3),
  new ShopProduct(10, 3, 2, 'Suporte para Notebook', 'Ajustável e portátil', 1),
  new ShopProduct(5, 9, 20, 'Mouse Pad', 'Superfície antiderrapante', 0)
];

const iOrderItems: OrderItem[] = [
  new OrderItem(iProducts[0].id, 2, iProducts, true),
  new OrderItem(iProducts[1].id, 1, iProducts, true),
  new OrderItem(iProducts[2].id, 1, iProducts, false),
  new OrderItem(iProducts[3].id, 3, iProducts, true),
  new OrderItem(iProducts[4].id, 1, iProducts, false),
  new OrderItem(iProducts[5].id, 2, iProducts, true),
  new OrderItem(iProducts[6].id, 1, iProducts, true),
  new OrderItem(iProducts[7].id, 2, iProducts, true),
  new OrderItem(iProducts[8].id, 1, iProducts, true),
  new OrderItem(iProducts[9].id, 2, iProducts, true),
  new OrderItem(iProducts[1].id, 2, iProducts, true),
  new OrderItem(iProducts[3].id, 1, iProducts, true)
];

const iOrder: Order[] = [
  new Order(iCustomers[0].id, iCustomers),
  new Order(iCustomers[0].id, iCustomers),
  new Order(iCustomers[1].id, iCustomers),
  new Order(iCustomers[2].id, iCustomers),
  new Order(iCustomers[3].id, iCustomers),
  new Order(iCustomers[4].id, iCustomers)
];

console.log('Mostrar 2 Customers:');
iCustomers[0].userInfo();
iCustomers[1].userInfo();

console.log('Mostrar 2 produtos:');
iProducts[2].detailsLog();
iProducts[3].detailsLog();

console.log('Agora mostrar em formato de API: ',
iProducts[4].detailsAPI());

console.log('Agora Exemplo de Order: ',
iOrder[5].orderTotalPrice());

console.log('Agora exemplo de lista de clientes: ',
iCustomers[2].showOrders(iCustomers, iOrder));