import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountToken} from "../model/AccountToken";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(user: any): Observable<AccountToken>{
    return this.http.post<AccountToken>("http://localhost:8080/login",user);
  }
  register(user: any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/register",user);
  }

  setToken(token: string){
    localStorage.setItem("token",token);
  }

  getToken(){
    return localStorage.getItem("token");
  }
  setAccountToken(userToken: AccountToken){
    localStorage.setItem("userToken",JSON.stringify(userToken));
  }

  getAccountToken(): AccountToken{
    return JSON.parse(<any>localStorage.getItem("userToken"));
  }

}
