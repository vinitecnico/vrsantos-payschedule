import { Component} from '@angular/core';
import { User} from '../model/user.model';
    
@Component({
    selector: 'title-component',
    templateUrl: 'app/user/html/user.title.component.html',
})
    
export class titleComponent {
     //@Input() User: User;
     title="wold";
    
     constructor() {         
     }
}