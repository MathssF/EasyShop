import { Customer } from "../Class/Customer";
import { Order } from "../Class/Order";
import { OrderItem } from "../Class/OrderItem";
import { Product } from "../Class/Product";
import { ShopProduct } from "../Class/ShopProduct";

console.log('Parte dos Produto');
const product1 = new Product("Skol Beats")
const product2 = new Product("Coca Zero")

product1.detailsLog();
product2.detailsLog();

console.log('Parte dos Shop Produtos');
const shopProduct1 = new ShopProduct(product1, 10, 50, 0)
const shopProduct2 = new ShopProduct(product2, 6, 20, 0)
const shopProduct3 = new ShopProduct(new Product('Brama'), 20, 6, 10)

shopProduct1.detailsLog();
shopProduct2.detailsLog();
shopProduct3.detailsLog();

console.log('Parte do Customer');
const customer1 = new Customer("Matheus", "Maths.aki@gmail.com", "Maths", "newPass")
const customer2 = new Customer("Lucas", "lcsflrs@gmail.com", "lcsflrs", "123123123")

console.log('Parte dos pedidos')
const orderItem1 = new OrderItem(2, shopProduct1, true)
const orderItem2 = new OrderItem(3, shopProduct2, true)
const orderItem3 = new OrderItem(8, shopProduct3)

orderItem1.detailsLog()
orderItem2.detailsLog()

console.log('Orders:');
const order1 = new Order(customer2)
order1.addItem(new ShopProduct(new Product('YoPro'), 20, 30, 25), 20, true);
order1.addItem(shopProduct1, 5, false);
order1.addItem(shopProduct3, 7, true);

const order2 = new Order(customer1)
order2.addItem(shopProduct1, 1, true)

const order3 = new Order(customer1)
order3.addItem(shopProduct3, 1, false)

order1.showOrderList();


console.log('Teste final: ')
console.log('Customer 1:')
const OrderTest1 = Order.findCustomerOrders([order1, order2, order3], customer1.id)
console.log(OrderTest1)


console.log('Customer 2:')
const OrderTest2 = Order.findCustomerOrders([order1, order2, order3], customer2.id);
console.log(OrderTest2);