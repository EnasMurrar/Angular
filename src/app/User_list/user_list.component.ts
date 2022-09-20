import { Component } from '@angular/core';
import { UsersService, theUser } from 'src/app/users.service';
//import {UserPipePipe} from "../../userPipe.pipe";


@Component({
  selector: 'app-User_list',
  templateUrl: './user_list.component.html',
  styleUrls: ['./user_list.component.css']
})

export class user_listComponent {
  users :{
    id:number,
    Name:string,
     Age: number;}[]=[];

  constructor(private obj :UsersService ) { }
  public UserList = new Array<any>();

  // ngOnInit(): void {

  //   this.obj.getUser().subscribe(res=>
  //   {
  //    console.log(res)
  //     this.UserList = res;
  //   });
  // }

   user: theUser = { id:0, Name:'', Age: 0 };

  // console.log(localStorage.getItem("token"));






}
