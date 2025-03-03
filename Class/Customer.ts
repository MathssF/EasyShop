import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';


export class Customer {
  private id: string;
  public name: string;
  public email: string;
  public user: string;
  private password: string;
  public credit: number;
  constructor(name: string, email: string, user: string, pass: string) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.user = user;
    this.password = bcrypt.hashSync(pass, 10);
    this.credit = 0;
  }

  userInfo() {
    console.log('O Usuário se chama ', this.name, ' e tem o email de endereço ', this.email);
  }
  userData(dataCustomers: Customer[], userId: string) {
    const targetUser = dataCustomers.find(elem => elem.id === userId);
    if (targetUser) return targetUser;
    return null;
  }

  showOrders() {
    //
  }
}