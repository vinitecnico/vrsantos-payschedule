import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
        <h1>Component Router</h1>
        <nav>
           <a [routerLink]="['/loginUser']">Login</a>
           <a [routerLink]="['/listUser']">List User</a>           
        </nav>                         
    <router-outlet></router-outlet></div>`,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {  
  
 }
