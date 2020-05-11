import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { FoodServiceService } from '../food/food-service.service';
import { Food } from '../food/food';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  foodCart: Food;
  totalCartPrice:number;
  cart: Cart;
  static cartCount:number=0;
  constructor(
    private foodService:FoodServiceService
  ) { }

  getCart(): Cart
  {
    if(this.cart==null)
      return null;
    else
    {
      this.cart.cartTotal = this.calculateTotalCartPrice();
      return this.cart;
    }
  }
  calculateTotalCartPrice()
  {
    this.totalCartPrice = 0;
    if(this.cart)
    for(let item of this.cart.cartItems)
    {
      this.totalCartPrice += item.price;
    }
    return this.totalCartPrice;
  }

  removeCartItem(id:number)
  {
    const item_index = this.cart.cartItems.findIndex(cartItem=>cartItem.id==id);
    this.cart.cartItems.splice(item_index,1); 
  }
  addToCart(id:number): string
  {
    this.foodCart = this.foodService.getFoodItemById(id);
    if(CartserviceService.cartCount == 0)
    {
      this.cart={
        cartItems:[
          this.foodCart
        ],
        cartTotal:0
      };
      CartserviceService.cartCount++;
    }
    else
    {
      this.cart.cartItems.push(this.foodCart);
      this.cart.cartTotal = 0;
      CartserviceService.cartCount++;
    }
    //console.log(CartserviceService.cartCount);
    return this.foodCart.name;
  }
}
