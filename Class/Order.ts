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

  private addItem(itemId: string, quantity: number, data: ShopProduct[], Ajusted?: Boolean) {
    if (this.status === 'Finished') return null;
    let AQ = false;
    if (quantity <= 0) return null;
    if (Ajusted) AQ = true;
    const newItem = new OrderItem(itemId, quantity, data, AQ);
    if (newItem.quantity > 0) this.itens.push(newItem);
    return newItem.id;
  }

  private removeItem(itemId: string) {
    if (this.status === 'Finished') return null;
    const targetItem = this.itens.find(elem => elem.id = itemId);
    if (!targetItem) return null;
    targetItem.cancelItem();
  }

  public orderTotalPrice() {
    let currentPrices = 0;
    for (let i = 0; i > this.itens.length; i += 1) {
      currentPrices += this.itens[i].totalPrice;
    }
    return currentPrices;
  }

  // Parte do Customer
  static findCustomerOrders(userData: Customer[], orderData: Order[], customerId: string) {
    const targetUser = Customer.userData(userData, customerId);
    const UserOrderList = [];
    for (let j = 0; j < orderData.length; j += 1) {
      if (orderData[j].customer?.id === customerId) UserOrderList.push(orderData[j]);
    }
    return UserOrderList;
  }

  creditCalc() {
    let totalCredit = 0;
    for (let j = 0; j > this.itens.length; j += 1) {
      if( this.itens[j].shopItem) this.itens[j].shopItem?.creditVal();
    }
  }

  customerMoneyChange(val: number) {
    if (this.customer) {
      if (this.customer.moneyAmount > val) {
        this.customer.moneyAmount -= val;
        return {
          found: true,
          acepted: true,
          newBalance: this.customer.moneyAmount
        }
      } else {
        return {
          found: true,
          acepted: false,
          newBalance: this.customer.moneyAmount
        }
      }
    } else {
      return { found: false }
    }
  }

  customerCreditChange(val: number, add: boolean) {
    if (this.customer) {
      if (add) {
        this.customer.credit += val;
        return {
          found: true,
          consume: false,
          newCredit: this.customer.credit
        }
      } else {
        if (this.customer.credit > val) {
          this.customer.credit -= val;
          return {
            found: true,
            consume: true,
            acepted: true,
            newCredit: this.customer.credit
          }
        } else {
          return {
            found: true,
            consume: true,
            acepted: false,
            newCredit: this.customer.credit
          }
        }
      }
    } else {
      return {
        found: false
      }
    }
  }
  // Fim da parte do Customer

  private finish(credit?: boolean) {
    const finalValor = this.orderTotalPrice();
    const list = this.itens.map(elem => elem.detailsAPI())
    let request: any = null

    if (credit) {
      request = this.customerCreditChange(finalValor, false)
      if (request.found) {}
    } else {
      
      this.status = 'Finished';
      return {
        Customer: this.customer?.name,
        Orders: list,
        TotalPrice: this.orderTotalPrice()
      }
    }
  }
}