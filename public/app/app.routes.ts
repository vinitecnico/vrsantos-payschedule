import { provideRouter, RouterConfig } from '@angular/router';
import { UserLoginComponent } from './user/user.login.component';
import { UserListComponent } from './user/user.list.component';

export const routes: RouterConfig = [
    { path: 'loginUser', component: UserLoginComponent }
    ,{ path: 'listUser', component: UserListComponent }
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]; 