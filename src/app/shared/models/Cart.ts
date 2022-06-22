import { CartItem } from "./CartItem";

export class Cart{
  items: CartItem[] = [];

  get totalPrice(): number {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }
}
