import { Product } from "./Product";

export class ShopProduct extends Product{
  public price: number;
  public promotion?: number;
  public stockQuantity: number;
  private creditGain?: number;
  constructor(
    price: number, quantity: number, credit: number | null, promotion: number,
    name: string, description: string | null
    ) {
    super(name, description);
    this.price = price;
    this.stockQuantity = quantity;
    this.creditGain = 0;
    this.promotion = promotion >= 0 && promotion <= 50 ? promotion : 0;
  }
  promotionPrice() {
    let newPrice = this.price
    if (typeof this.promotion === 'number') {
      newPrice = this.price * ((100 - this.promotion)/100);
    }
    return newPrice;
  }
  addCredit(valor: number) {
    let currentPrice = this.price;
    if (this.promotion) {
      currentPrice = this.promotionPrice();
    }
    if (valor < currentPrice) {
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

  details() {
    let count = 3
    super.details();
    if (this.description) count ++;
    if (this.imagePath) count ++;
    console.log(count, '- A quantidade atual é de ', this.stockQuantity, ' itens.');
    count++;
    console.log(count, '- O Preço do Produto é de R$', this.price, '.');
    if (this.promotion && this.promotion > 0) {
      count ++;
      console.log(count, '- Preço promocional: R$', this.promotionPrice());
    }
  }
  detailsString(): Record<string, string> {
    const result = super.detailsString();
    let QuantityString = `A quantidade atual deste produto é de ${this.stockQuantity} peças`;
    result.Quantity = QuantityString;
    let PriceString = '';
    if (this.promotion && this.promotion > 0) {
      const currentPrice = this.promotionPrice();
      PriceString = `O Preço deste produto, caiu de R$${this.price} para R$${currentPrice}!`;
    } else {
      PriceString = `O preço deste produto é de R$${this.price}.`
    }
    return result;
  }
  detailsAPI(): Partial<{
    productId: string;
    productName: string;
    productDescription: string;
    productImagePath: string;
  }> {
    const result = super.detailsAPI();
    return result;
  }
}