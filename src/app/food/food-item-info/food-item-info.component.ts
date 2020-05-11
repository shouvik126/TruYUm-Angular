import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { AuthService } from 'src/app/site/auth.service';
import { Router } from '@angular/router';
import { Food } from '../food';
import { CartserviceService } from 'src/app/shopping/cartservice.service';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './food-item-info.component.html',
  styleUrls: ['./food-item-info.component.css']
})
export class FoodItemInfoComponent implements OnInit {

  @Input() foodList : Food[];
  @Output() addedToCart = new EventEmitter();
  isCustomer : boolean = this.authService.isCustomer;
  itemName : string;
  itemAdded = false;
  constructor(
    private foodService:FoodServiceService,
    private authService:AuthService,
    private router:Router,
    private cartService: CartserviceService
  ) { }

  ngOnInit(): void {
    if(this.isEditAllowed())
    {
      this.foodList = this.foodService.getFoodItemAdmin();
    }
    else
    {
      this.foodList = this.foodService.getFoodItems(true,new Date());
    }
  }

  isEditAllowed():boolean{
    return this.authService.isUserAdmin();
  }

  addToCart(itemId: number)
  {
    //console.log("crt item added");
    if(this.isCustomer)
    {
        this.itemAdded = true;
        this.itemName = this.cartService.addToCart(itemId);
        setTimeout(()=>{
          this.itemAdded = false;
        },1000);
    }
    else
    {
      this.authService.authStatus = 'cart';
      this.router.navigate([this.authService.redirectUrlLogin]);
    }
  }

}
