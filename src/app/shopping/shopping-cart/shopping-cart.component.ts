import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItemRemoved:boolean=false;
  cart:Cart;
  constructor(
    private cartService:CartserviceService,
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeCartItem(id: number)
  {
    this.cartService.removeCartItem(id);
    this.cartItemRemoved = true;
  }
  calculateTotalPrice(): number
  {
    //if(this.cartService.calculateTotalCartPrice)
    return this.cartService.calculateTotalCartPrice();
  }

}
