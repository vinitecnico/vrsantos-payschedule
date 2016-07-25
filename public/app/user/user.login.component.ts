import { Component } from '@angular/core';

@Component({
    //selector: 'talk-list',
    templateUrl: 'app/user/html/user.login.component.html'
})
export class UserLoginComponent {
    title = 'Welcome to Solar System Planets !!';
    values: number[] = [1, 2, 3];
    test : string;
    
    onClick(value: number){
        //console.log("cliked" + value);
        this.test ="Cliked(" + value+")";
    }
}