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
  promotionPrice(price: number, promotion: number) {
    const newPrice = price * ((100 - promotion)/100);
    return newPrice;
  }
  addCredit(valor: number) {
    let currentPrice = this.price;
    if (this.promotion) {
      currentPrice = this.promotionPrice(this.price, this.promotion);
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
  details() {
    let count = super.details();
    count ++;

  }
}