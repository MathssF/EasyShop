import { v4 as uuidv4 } from 'uuid';
import { OrderItem } from './OrderItem';
import { Customer } from './Customer';

export class Order {
  private id: string;
  public customer: Customer | null;
  public itens: OrderItem[];
  public status: string;
  constructor(userId: string) {
    this.id = uuidv4();
    const FoundUser = 
  }
}