import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User} from '../model/user.model';
import { CONFIG } from '../config';

let ApiPath = CONFIG.baseUrls.ApiPath;

@Injectable()
export class UserService {
  constructor(private _http: Http) { }

   _user = new User();
  
   getUsers(value?: string) {
    return this._http.get(ApiPath+'user')
      .map((response: Response) => <User[]>response.json())
      .toPromise()
      .catch(this.handleError);
  }

  getlike(value?: string) {
    return this._http.get(ApiPath+'user/'+value+'/search')
      .map((response: Response) => <User[]>response.json())
      .toPromise()
      .catch(this.handleError);
  }

  getUser_id(_id: string) {
    return this._http.get(ApiPath+'user/'+ _id)
      .map((response: Response) => <User[]>response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}