import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

constructor() { }

private status = new BehaviorSubject<string>('');

getSpinnerObserver(): Observable<string>{
  return this.status.asObservable();
}

requestStarted(){
  this.status.next('start');
}

requestEnded(){
  this.status.next('stop')
}

}
