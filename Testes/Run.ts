import { Customer } from '../Class/Customer';
import { ShopProduct } from '../Class/ShopProduct';
import { OrderItem } from '../Class//OrderItem';
import { Order } from '../Class/Order';

import {
  customers as iCustomer,
  products as iProduct,
  orderItems as iOrderItens,
  orders as iOrder
} from './TabelasClass';

iCustomer;
iProduct;
iOrderItens;
iOrder;

iOrder[0].itens.push(iOrderItens[0], iOrderItens[1]);
iOrder[1].itens.push(iOrderItens[2], iOrderItens[3]);
iOrder[2].itens.push(iOrderItens[4], iOrderItens[5]);
iOrder[3].itens.push(iOrderItens[6], iOrderItens[7]);
iOrder[4].itens.push(iOrderItens[8], iOrderItens[9]);
iOrder[5].itens.push(iOrderItens[10], iOrderItens[11]);

console.log('Mostrar 2 Customers:');
iCustomer[0].userInfo();
iCustomer[1].userInfo();

console.log('Mostrar 2 produtos:');
iProduct[2].detailsLog();
iProduct[3].detailsLog();

console.log('Agora mostrar em formato de API: ');
iProduct[4].detailsAPI();

console.log('Agora Exemplo de Order: ');
iOrder[5].orderTotalPrice();

console.log('Agora exemplo de lista de clientes: ');
iCustomer[2].showOrders(iCustomer, iOrder);