import { Component } from '@angular/core';
import { User, UserService } from './service/service.user.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserListComponent } from './user/user.list.component'
import 'rxjs/Rx'; // load the full rxjs

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',    
    providers: [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    UserService
  ],
  directives: [ROUTER_DIRECTIVES]    
})

export class AppComponent { 
 }
