import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart =  new Cart();

  addToCart(food: Foods): void{
    let item = this.cart.items.find(i => i.food.id === food.id);
    if (item) {
      this.changeQuantity(food.id, item.quantity + 1);
      return ;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId: number): void{
    this.cart.items = this.cart.items.filter(i => i.food.id !== foodId);
  }

  changeQuantity(foodId: number, quantity: number): void{
    this.cart.items = this.cart.items.map(i => {
      if (i.food.id === foodId) {
        i.quantity = quantity;
      }
      return i;
    });
  }

  getCart():Cart{
    return this.cart;
  }

}
