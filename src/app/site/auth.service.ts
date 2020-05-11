import { Injectable } from '@angular/core';
import { user } from './user';
import { UserServiceService } from './user-service.service';
export const AUTHENTICATED_USER = 'authenticateUser';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loggedIn = false;
  isAdmin = false;
  isCustomer = false;
  user : user;
  redirectUrl = '/menu';
  redirectUrlLogin = '/login';
  authenticatedUser : user;
  authStatus : string = null;

  constructor(
    private userService: UserServiceService
  ) { }

  login(username : string, password: string) : boolean {
    console.log("inside login")
    this.user = this.userService.authenticate(username, password);
    if(this.user != null && this.user.role == 'admin') {
      this.loggedIn = true;
      this.authenticatedUser = this.user;
      this.isAdmin = true;
      this.isCustomer = false;
      sessionStorage.setItem(AUTHENTICATED_USER,username);
      // this.redirectUrl = '/food-item-info';
      return true;
    }
    else if(this.user != null && this.user.role == 'customer') {
      this.loggedIn = true;
      this.authenticatedUser = this.user;
      this.isAdmin = false;
      this.isCustomer = true;
      sessionStorage.setItem(AUTHENTICATED_USER,username);
      // this.redirectUrl = '/menu';
      return true;
    }
    else {
      // this.isCustomer = false;
      // this.isAdmin = true;
      return false;
    }

  }

  logOut() {
    this.redirectUrl = '/';
    this.loggedIn = false;
    this.isCustomer = false;
    this.isAdmin = false;
    sessionStorage.removeItem(AUTHENTICATED_USER);
    
  }

  isUserAdmin()
 {
   return  this.isAdmin;
 }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user===null);
  }
}
