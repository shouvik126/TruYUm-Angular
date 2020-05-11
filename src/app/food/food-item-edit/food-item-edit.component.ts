import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-food-item-edit',
  templateUrl: './food-item-edit.component.html',
  styleUrls: ['./food-item-edit.component.css']
})
export class FoodItemEditComponent implements OnInit {

  food:Food;
  foodId:number;
  editFoodForm:FormGroup;
  foodEdited = false;
  constructor(
    private route: ActivatedRoute,
    private foodService:FoodServiceService
  ) { }

  ngOnInit(): void {
    this.foodId = this.route.snapshot.params['id'];
    this.food = this.foodService.getFoodItemById(this.foodId);
    console.log("yoyo -> "+this.food.dateOfLaunch.toISOString());
    this.editFoodForm = new FormGroup({
      'name': new FormControl(this.food.name,[Validators.required, Validators.maxLength(100)]),
      'price': new FormControl(this.food.price,[Validators.required, Validators.pattern('^[0-9]+$')]),
      'category': new FormControl(this.food.category,[Validators.required]),
      'dateOfLaunch': new FormControl(new Date(this.food.dateOfLaunch+'EDT').toISOString().substring(0,10),[Validators.required]),
      //'dateOfLaunch': new FormControl(this.food.dateOfLaunch.toLocaleDateString(),[Validators.required]),
      'active': new FormControl(this.food.active,[Validators.required]),
      'freeDelivery': new FormControl(this.food.freeDelivery)
    });
  }

  updateFoodItem()
  {
    //console.log(this.editFoodForm);
    this.food.name=this.editFoodForm.value.name;
    this.food.price =this.editFoodForm.value.price;
    this.food.category = this.editFoodForm.value.category;
    this.food.dateOfLaunch =this.editFoodForm.value.dateOfLaunch;
    this.food.active =this.editFoodForm.value.active;
    this.food.freeDelivery =this.editFoodForm.value.freeDelivery;

    //this.bo.updateBookItem(this.book);
    this.foodService.updateFoodItem(this.food);
    this.foodEdited = true;
  }

}
