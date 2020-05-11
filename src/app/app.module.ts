import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/header/header.component';
import { FooterComponent } from './site/footer/footer.component';
import { LoginComponent } from './site/login/login.component';
import { RouterModule } from '@angular/router';
import { FoodSearchComponent } from './food/food-search/food-search.component';
import { FoodItemInfoComponent } from './food/food-item-info/food-item-info.component';
import { FoodItemEditComponent } from './food/food-item-edit/food-item-edit.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    FoodSearchComponent,
    FoodItemInfoComponent,
    FoodItemEditComponent,
    ShoppingCartComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
