import { v4 as uuidv4 } from 'uuid';
import { ShopProduct } from './ShopProduct';

export class OrderItem {
  public id: string;
  public shopItem: ShopProduct | null;
  public quantity: number;
  public itemPrice: number;
  public totalPrice: number;
  public status: string;

  constructor(quantity: number, shopProduct: ShopProduct, AdjustQuantity?: boolean) {
    // const foundProduct = ShopProduct.findProduct(data, itemId);
    this.id = uuidv4();
    this.shopItem = shopProduct;
    let finalQuantity = 0;
    let finalStatus = 'Processed';

    if (this.shopItem) {
      const tryOrder = this.shopItem.orderProduct(quantity);
      console.log('Try Order quantity: ', tryOrder.quantity);

      if (tryOrder.acept) {
        finalQuantity = quantity;
        finalStatus = 'Acepted';
      } else {
        if (tryOrder.quantity === 0) {
          finalQuantity = 0;
          finalStatus = 'Failed';
        } else {
          if (AdjustQuantity) {
            console.log('Ajustando a quantidade para o total em estoque!');
            finalQuantity = tryOrder.quantity;
            finalStatus = 'Ajusted';
          } else {
            console.log('Não vamos ajustar a quantidade, vamos manter 0');
            finalQuantity = 0;
            finalStatus = 'Failed';
          }
        }
      }
    }
    this.quantity = finalQuantity;
    this.itemPrice = shopProduct ? shopProduct.promotionPrice() : 0;
    this.totalPrice = this.itemPrice * this.quantity;
    this.status = finalStatus;
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
    const result =  {
      name: this.shopItem?.name,
      description: this.shopItem?.description,
      quantity: this.quantity,
      price: this.itemPrice,
      totalPrice: this.totalPrice
    }
    if (result.description === '') {
      delete result.description
    }
    return result;
  }

  public cancelItem() {
    if (this.shopItem) {
      this.shopItem.orderCancelled(this.quantity);
      this.quantity = 0;
      this.totalPrice = 0;
      this.status = 'Canceled';
    }
  }
}