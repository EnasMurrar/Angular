import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { UsersService, theUser } from "src/app/users.service";
//import {UserPipePipe} from "../../userPipe.pipe";

@Component({
    selector: 'app-User_form',
    templateUrl: './user_form.component.html',
    styleUrls: ['./user_form.component.css']

  })

export class user_formComponent implements OnInit {

  newUser: theUser ={id: 0, name:'',  age: 0 }
  public UserList: theUser[]=[];

  constructor(private obj :UsersService) { }
  ngOnInit(): void {

  }

 
  }





