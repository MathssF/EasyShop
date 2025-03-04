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
const customer = new Customer("Lucas", "lcsflrs@gmail.com", "lcsflrs", "123123123")

console.log('Parte dos pedidos')
const orderItem1 = new OrderItem(2, shopProduct1)
const orderItem2 = new OrderItem(3, shopProduct2)
const orderItem3 = new OrderItem(8, shopProduct3)

// orderItem1.detailsLog()
// orderItem2.detailsLog()

console.log('Parte final');
const order = new Order(customer)
order.addItem(new ShopProduct(new Product('YoPro'), 20, 30, 25), 20, true);
order.addItem(shopProduct1, 5, false);
order.addItem(shopProduct3, 7, true);

order.showOrderList();