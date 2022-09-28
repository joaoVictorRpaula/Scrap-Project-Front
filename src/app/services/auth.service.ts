import { BehaviorSubject, Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
  private bool = new BehaviorSubject<boolean>(false);
  boolConfirm: Observable<boolean> = this.bool.asObservable();

  routeConfirm(boolReceive:boolean){
    this.bool.next(boolReceive)
  }

}
