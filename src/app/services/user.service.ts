import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://localhost:5001/users"
  private sendUser = new BehaviorSubject<User>({edv: 'any', nome: 'any', centroCusto: 'any'});
  data: Observable<User> = this.sendUser.asObservable();

constructor(private httpClient: HttpClient) { }

  getUserByEdv(edv : string): Observable<User>{

    const urlEdv = this.url + "/edv";
    let queryParams = new HttpParams().append("edv",edv)

    return this.httpClient.get<User>(urlEdv, {params: queryParams});
  }

  setUser(user: User): void{
    this.sendUser.next(user);
  }



}
