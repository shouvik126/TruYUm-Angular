import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';
import { Food } from '../food';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent implements OnInit {

  searchKey:String;
  foodsSearch: Food[];
  constructor(
    private foodService:FoodServiceService
  ) { }

  ngOnInit(): void {
  }
  search()
  {
    this.foodsSearch = this.foodService.search(this.searchKey);
  }
}
