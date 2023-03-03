import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Tour} from "../model/Tour";
import {AccountToken} from "../model/AccountToken";

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http:HttpClient) {

  }
  findAll(): Observable<Tour[]> {
    return this.http.get<Tour[]>('http://localhost:8080/tours');
  }

  getALl(): Observable<Tour[]>{
    return this.http.get<Tour[]>("http://localhost:8080/tours");
  }
  create(tour : Tour): Observable<Tour> {
    return this.http.post<Tour>('http://localhost:8080/tours/admin', tour)
  }
  delete(tour : Tour): Observable<Tour> {
    return this.http.post<Tour>('http://localhost:8080/tours/delete', tour)
  }
  findById(id : number): Observable<Tour> {
    return this.http.get<Tour>('http://localhost:8080/tours/admin/' + id)
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
    return JSON.parse(<string>localStorage.getItem("userToken"));
  }
}
