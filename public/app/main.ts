import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

bootstrap(AppComponent, [ HTTP_PROVIDERS,APP_ROUTER_PROVIDERS]).then(success => console.log(`Bootstrap success`)).catch(err => console.error(err));
