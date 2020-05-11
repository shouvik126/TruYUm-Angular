import { Injectable } from '@angular/core';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userList : user[] = [{
    username : 'admin',
    firstname  :  'admin',
    lastname : 'account',
    password : 'admin',
    role : 'admin'
  },
  {
    username : 'abc',
    firstname  :  'abc',
    lastname : 'def',
    password : 'abc',
    role : 'customer'
  }];
  constructor() { }
  
addUser(user: user) {
  this.userList.push(user);
  console.log(this.userList);

}

// getUser() : user[] {
//   return this.userList;
// }

authenticate (username : string , password:string) {
  for(let authUser of this.userList) {
    if(username == authUser.username && password == authUser.password) {
      return authUser;
    }
  }
  return null;
}

}
