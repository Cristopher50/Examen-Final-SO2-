import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleError } from '../common/handle-error';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class userService {

   urlBase='http://localhost:5050/api/users';

  constructor(
    private http:  HttpClient,
    private handleError: HandleError
  ) { }

  getUser(){
    return this.http.get<any>(`${this.urlBase}/all`).pipe(
      catchError(this.handleError.handleError<any>('getNavBar'))
    );
  }

  postUser(data:User){
    return this.http.post<any>(`${this.urlBase}/save`,data).pipe(
      catchError(this.handleError.handleError<any>('postUseDatabase'))
    );
  }


}
