import { Component, Input, OnInit } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';
import { UserService } from '../service/service.user.component';
import { User} from '../model/user.model';

@Component({    
    templateUrl: 'app/user/html/user.list.component.html'
})

export class UserListComponent implements OnInit{
   errorMessage: string;
   users: Promise<User[]>;

   constructor(private _userService: UserService) { }

   ngOnInit() { this.getusers(); }

   getusers(value?: string) {
     this.users = this._userService.getUsers(value);
   }

}