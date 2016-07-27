import { Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import { UserService} from '../service/service.user.component';
import { User} from '../model/user.model';
import {UserListComponent} from "./user.list.component";

@Component({
    selector: 'talk-list',
    templateUrl: 'app/user/html/user.login.component.html',
    directives: [UserListComponent]
})

export class UserLoginComponent {
    value: string;
    title = 'Welcome to Solar System Planets !!';
    values: number[] = [1, 2, 3];
    test : string;    
     user = new User();
     users: Promise<User[]>;

    constructor(private _userService: UserService) { }
    
    onClick(value: number){        
        this.test ="Cliked(" + value+")";
    }

    onClicktest(value){
       this.values.push(value);
       this.test ="Cliked(" + value+")";
       this.value="";
    }

    test2(user : User){        
        alert(user.name);
    }

    getlike(value?: string) {
       this.users = this._userService.getlike(value);      
    }

     isValid(value?: string) {
         if(value!="")
           return true;
        else
           return false;
   }
}