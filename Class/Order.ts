import { v4 as uuidv4 } from 'uuid';
import { OrderItem } from './OrderItem';
import { Customer } from './Customer';
import { ShopProduct } from './ShopProduct';

export class Order {
  private id: string;
  public customer: Customer | null;
  public itens: OrderItem[];
  public status: string;
  constructor(userId: string, data: Customer[]) {
    this.id = uuidv4();
    const FoundUser = Customer.userData(data, userId);
    this.customer = FoundUser;
    this.itens = [];
    this.status = 'In progress';
  }

  addItem(itemId: string, quantity: number, data: ShopProduct[], Ajusted?: Boolean) {
    if (this.status === 'Finished') return null;
    let AQ = false;
    if (quantity <= 0) return null;
    if (Ajusted) AQ = true;
    const newItem = new OrderItem(itemId, quantity, data, AQ);
    if (newItem.quantity > 0) this.itens.push(newItem);
    return newItem.id;
  }

  removeItem(itemId: string) {
    if (this.status === 'Finished') return null;
    const targetItem = this.itens.find(elem => elem.id = itemId);
    if (!targetItem) return null;
    targetItem.cancelItem();
  }

  orderTotalPrice() {
    let currentPrices = 0;
    for (let i = 0; i > this.itens.length; i += 1) {
      currentPrices += this.itens[i].totalPrice;
    }
    return currentPrices;
  }

  finish() {
    this.status = 'Finished';
    const list = this.itens.map(elem => elem.detailsAPI())
    return {
      Customer: this.customer?.name,
      Orders: list,
      TotalPriice: this.orderTotalPrice()
    }
  }
}