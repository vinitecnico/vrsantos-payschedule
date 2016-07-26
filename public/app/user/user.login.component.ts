import { Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import { UserService} from '../service/service.user.component';
import { User} from '../model/user.model';

@Component({
    selector: 'talk-list',
    templateUrl: 'app/user/html/user.login.component.html'
})

export class UserLoginComponent {
    
    title = 'Welcome to Solar System Planets !!';
    values: number[] = [1, 2, 3];
    test : string;    
     user = new User();

    constructor(private _userService: UserService) { }
    
    onClick(value: number){        
        this.test ="Cliked(" + value+")";
    }

    onClicktest(value){
       this.values.push(value);
       this.test ="Cliked(" + value+")";
    }

    test2(user : User){
        console.log(user);
    }
}