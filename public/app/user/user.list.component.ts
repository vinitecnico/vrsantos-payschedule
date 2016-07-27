import { Component, Input, OnInit } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';
import { UserService } from '../service/service.user.component';
import { User} from '../model/user.model';
import {titleComponent} from "./user.title.component";

@Component({    
    selector: 'userList-component',
    templateUrl: 'app/user/html/user.list.component.html',
    directives: [titleComponent]
})

export class UserListComponent implements OnInit{
   errorMessage: string;
   users: Promise<User[]>;

   constructor(private _userService: UserService) { }

   ngOnInit() { this.getusers(); }

   getusers(value?: string) {
     this.users = this._userService.getUsers(value);
   }

   getlike(value?: string) {
       if(value !="")
        this.users = this._userService.getlike(value);
       else
         this.getusers();     
    }

}