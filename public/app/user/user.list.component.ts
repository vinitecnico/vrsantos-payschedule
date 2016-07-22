import { Component } from '@angular/core';

@Component({
    //selector: 'talk-list',
    templateUrl: 'app/user/html/user.list.component.html'
})
export class UserListComponent {
    title = 'Welcome to Solar System Planets !!';
    values: number[] = [1, 2, 3];
}