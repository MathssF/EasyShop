import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { Order } from './Order';


export class Customer {
  public id: string;
  public name: string;
  public email: string;
  public user: string;
  private password: string;
  public moneyAmount: number;
  public credit: number;

  constructor(name: string, email: string, user: string, pass: string, startMoney?: number) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.user = user;
    this.password = bcrypt.hashSync(pass, 10);
    this.moneyAmount = startMoney || 0;
    this.credit = 0;
  }

  public userInfo() {
    console.log('O Usuário se chama ', this.name, ' e tem o email de endereço ', this.email);
  }

  static userData(dataCustomers: Customer[], userId: string) {
    const targetUser = dataCustomers.find(elem => elem.id === userId);
    if (targetUser) return targetUser;
    return null;
  }

  showOrders(userData: Customer[], orderData: Order[]) {
    const orderList = Order.findCustomerOrders(userData, orderData, this.id);
    return orderList;
  }

  addMoney(val: number) {
    this.moneyAmount += val;
  }
}