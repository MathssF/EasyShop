import { v4 as uuidv4 } from 'uuid';
import { ShopProduct } from './ShopProduct';

export class OrderItem {
  private shopItem: ShopProduct | null;
  private quantity: number;
  private itemPrice: number;
  private totalPrice: number;
  constructor(itemId: string, quantity: number, data: ShopProduct[]) {
    const FoundProduct = ShopProduct.findProduct(data, itemId);
    this.shopItem = FoundProduct;
    this.quantity = FoundProduct ? FoundProduct.stockQuantity : 0;
    this.itemPrice = FoundProduct ? FoundProduct.promotionPrice() : 0;
    this.totalPrice = this.itemPrice * this.quantity;
  }

  public detailsLog() {
    console.log(
      ' O Produto "', this.shopItem?.name,
      '" foi posto no carrinho com ', this.quantity,
      '" unidades, pelo valor unitário de R$: ', this.itemPrice,
      ' e total de R$: ', this.totalPrice, '.'
    );
  }

  public detailsAPI() {
    
  }
}