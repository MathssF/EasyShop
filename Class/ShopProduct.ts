import { Product } from "./Product";
import { v4 as uuidv4 } from 'uuid';


export class ShopProduct extends Product{
  // public shopId: string; // USar só se nescessário
  public price: number;
  public promotion: number;
  public stockQuantity: number;
  private creditGain?: number;
  constructor(
    price: number, quantity: number, credit: number | null, promotion: number,
    name: string, description: string | null
    ) {
    super(name, description);
    // this.shopId = uuidv4(); // Usar só se nescessário
    this.price = price;
    this.stockQuantity = quantity >= 0 ? quantity : 0;
    this.creditGain = 0;
    this.promotion = promotion >= 0 && promotion <= 50 ? promotion : 0;
  }
  promotionPrice() {
    let newPrice = this.price * ((100 - this.promotion)/100);
    
    return newPrice;
  }
  addCredit(valor: number) {    
    if (valor < this.promotionPrice()) {
      this.creditGain = valor;
    }
  }
  creditVal() {
    if (this.creditGain) {
      return this.creditGain;
    }
    return 0
  }

  // Polimorfismo das classes herdadas:

  public detailsLog() {
    let count = 3
    super.detailsLog();
    if (this.description) count ++;
    if (this.imagePath) count ++;
    console.log(count, '- A quantidade atual é de ', this.stockQuantity, ' itens.');
    count++;
    console.log(count, '- O Preço do Produto é de R$', this.price, '.');
    if (this.promotion > 0) {
      count ++;
      console.log(count, '- Preço promocional: R$', this.promotionPrice());
    }
  }
  public detailsString(): Record<string, string> {
    const result = super.detailsString();
    let QuantityString = `A quantidade atual deste produto é de ${this.stockQuantity} peças`;
    result.Quantity = QuantityString;
    let PriceString = '';
    if (this.promotion > 0) {
      const currentPrice = this.promotionPrice();
      PriceString = `O Preço deste produto, caiu de R$${this.price} para R$${currentPrice}!`;
    } else {
      PriceString = `O preço deste produto é de R$${this.price}.`
    }
    return result;
  }
  public detailsAPI(): Record<string, string>{
    const API = super.detailsAPI();
    const { productId, productName, productDescription, productImagePath } = API;
    const result: Record<string, string>= {productId, productName}
    if (productDescription) {
      result.productDescription = productDescription;
    }
    if (productImagePath) {
      result.productImagePath = productImagePath;
    }
    if (this.promotion > 0) {
      result.productBasePrice = `R$ ${this.price}`;
      result.productCurrentPrice = `R$ ${this.promotionPrice()}`;
    } else {
      result.productPrice = `R$ ${this.price}`;
    }
    return result;
  }

  // Métodos para interação com Orders, e com Customers:

  public orderProduct(quantity: number) {
    const fail = {
      acept: false,
      quantity: 0
    };
    if (this.stockQuantity = 0) {
      console.log('O Produto atual não tem estoque.')
      return fail;
    }
    if (quantity < 1) {
      console.log('Precisa selecionar ao menos um item.')
      return fail;
    }
    if (quantity > this.stockQuantity) {
      console.log('Não se tem tantas unidades deste produto, a quantidade atual é de ',
      this.stockQuantity, '.');
      return {
        acept: false,
        quantity
      };
    }
    this.stockQuantity -= quantity;
    console.log('Foi reservado ', quantity, ' unidades deste produto.');
    return {
      acept: true,
      quantity
    };
  }
  public orderCancelled(quantity: number) {
    this.stockQuantity += quantity;
  }

  static findProduct(dataProducts: ShopProduct[], productId: string): ShopProduct | null {
    // Aqui vai localizar primeiramento o Banco
    // Depois de localizar o Banco, vai localizar o ID do shopProduct.
    const targetProduct = dataProducts.find(elem => elem.id === productId)
    if (targetProduct) return targetProduct;
    return null;
  }
}