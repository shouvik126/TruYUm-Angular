import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { FoodSearchComponent } from './food/food-search/food-search.component';
import { FoodItemInfoComponent } from './food/food-item-info/food-item-info.component';
import { FoodItemEditComponent } from './food/food-item-edit/food-item-edit.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './site/auth.guard';


const routes: Routes = [
  {path: 'menu', component: FoodSearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'food-item-info', component: FoodItemInfoComponent},
  {path: 'cart', component: ShoppingCartComponent,canActivate:[AuthGuard]},
  {path: 'food-item-edit/:id', component: FoodItemEditComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo: 'menu', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
