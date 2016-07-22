import { Injectable } from '@angular/core';

@Injectable()

export class ValuesService {
   constructor() { }    

   getPath() {
        return 'https://vrsantos-payschedule.herokuapp.com/api/';
    }
}