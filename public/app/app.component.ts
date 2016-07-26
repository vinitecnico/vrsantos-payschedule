import { Component } from '@angular/core';
import { UserService } from './service/service.user.component';
import { User} from './model/user.model';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { UserLoginComponent } from './user/user.login.component';
import { UserListComponent } from './user/user.list.component';
import 'rxjs/Rx'; // load the full rxjs

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',    
    providers: [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    UserService
  ],
  directives: [ROUTER_DIRECTIVES , UserListComponent , UserLoginComponent],
  precompile: [UserListComponent , UserLoginComponent]    
})

export class AppComponent { 
 }
