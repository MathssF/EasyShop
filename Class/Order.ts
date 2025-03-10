import { v4 as uuidv4 } from 'uuid';
import { OrderItem } from './OrderItem';
import { Customer } from './Customer';
import { ShopProduct } from './ShopProduct';

export class Order {
  private id: string;
  public customer: Customer;
  public itens: OrderItem[];
  public status: string;
  constructor(user: Customer) {
    this.id = uuidv4();
    this.customer = user;
    this.itens = [];
    this.status = 'In progress';
  }

  public addItem(item: ShopProduct, quantity: number, Ajusted?: Boolean) {
    if (this.status === 'Finished') return null;
    if (quantity <= 0) return null;
    let ajusted = false;
    if (Ajusted) ajusted = true;
    const newItem = new OrderItem(quantity, item, ajusted);
    if (newItem.quantity > 0) this.itens.push(newItem);
    return newItem.id;
  }

  public removeItem(itemId: string) {
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
  static findCustomerOrders(orderData: Order[], customerId: string) {
    return orderData.filter((elem) => elem.customer?.id === customerId);
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

  public showOrderList() {
    console.log(this.itens);
  }

  public finish(credit?: boolean) {
    this.status = 'In progress';
    const finalValor = this.orderTotalPrice();
    const list = this.itens.map(elem => elem.detailsAPI())
    let request: any = null

    if (credit) {
      request = this.customerCreditChange(finalValor, false);
      if (request.found) {
        if (request.consume && request.acepted) {
          this.status = 'Finished - Credit';
          return {
            Customer: this.customer?.name,
            Orders: list,
            TotalPrice: this.orderTotalPrice(),
            NewCredit: request.newCredit
          }
        } else {
          this.status = 'Failed';
          return {
            Error: 'Sem crédito suficiente.'
          }
        }
      } else {
        this.status = 'Failed';
        return {
          Error: 'Cliente não encontrado.'
        }
      }
    } else {
      request = this.customerMoneyChange(finalValor);
      if (request.found) {
        if (request.acepted) {
          this.status = 'Finished';
          return {
            Customer: this.customer?.name,
            Orders: list,
            TotalPrice: this.orderTotalPrice(),
            NewBalance: request.newBalance
          }
        } else {
          this.status = 'Failed';
          return {
            Error: 'Sem crédito suficiente.'
          }
        }
      } else {
        this.status = 'Failed';
        return {
          Error: 'Cliente não encontrado.'
        }
      }
    }
  }
}