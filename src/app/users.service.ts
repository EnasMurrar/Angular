import { Injectable } from '@angular/core';
// import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

    public userList: theUser[] = [{
        
        id :1,
        name: 'Enas Murrar',
        age :22
    },
    {
      id:2,
      name: 'jihan shafie',
      age :21
    }
  ];


  constructor() { }

  addUser(user: User) {
    user.id = new Date().getTime();
    this.userList.push(user);
  }

  removeUser(id: number) {
    this.userList = this.userList.filter(x => x.id != id);
  }
//   deleteUser(user:theUser){
//     let i = this.UserList.indexOf(t);
//     if (i>= 0){
//       this.UserList.splice(i,1);
//     }
// }

}
