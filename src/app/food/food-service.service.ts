import { Injectable } from '@angular/core';
import { Food } from './food';
import { AuthService } from '../site/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  foodFilter: Food[] = [];
  foods: Food[] = [
    {id: 101,
      name: "Sandwich",
      price:99,
      active:true,
      dateOfLaunch:new Date('03/15/2017'),
      category:'MainCourse',
      freeDelivery:true,
      url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    },
    {id: 102,
      name: "Burger",
      price:129,
      active:true,
      dateOfLaunch:new Date('12/23/2017'),
      category:'MainCourse',
      freeDelivery:false,
      url: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {id: 103,
      name: "Pizza",
      price:149,
      active:true,
      dateOfLaunch:new Date('08/21/2017'),
      category:'MainCourse',
      freeDelivery:false,
      url: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80'
    },
    {id: 104,
      name: "French Fries",
      price:32,
      active:false,
      dateOfLaunch:new Date('07/02/2017'),
      category:'Starter',
      freeDelivery:true,
      url: 'https://images.unsplash.com/photo-1526230427044-d092040d48dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {id: 105,
      name: "Chocolate Brownie",
      price:57,
      active:true,
      dateOfLaunch:new Date('11/02/2017'),
      category:'Dessert',
      freeDelivery:true,
      url: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80'
    },

  ];
  constructor(private authService: AuthService) { }
  getFoodItemAdmin(): Food[]
  {
    return this.foods;
  }
  getFoodItems(active:boolean, dateOfLaunch:Date) : Food[]{
    this.foodFilter= this.foods.filter(x=>x.active == active && x.dateOfLaunch < dateOfLaunch);
    return this.foodFilter;
  }
  search(searchKey: String):Food[]
  {
    if (this.authService.isAdmin) {
      this.foodFilter = this.foods.filter(x => x.name.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1)
    }
    else
        this.foodFilter= this.foods.filter(x=>x.name.toLowerCase().indexOf(searchKey.toLowerCase())!==-1 && x.active == true && x.dateOfLaunch < new Date()) ;
      return this.foodFilter;
  }

  getFoodItemById(foodId:number): Food
  {
    for(let food of this.foods )
    {
      if(food.id == foodId)
      {
        return food;
      }
    }
    return null;
  }

  updateFoodItem(food:Food)
  {
    const foodId = this.foods.findIndex(fid=>fid.id==food.id);
    this.foods[foodId] = food;
  }
}
