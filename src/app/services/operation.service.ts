import { HttpClient } from '@angular/common/http';
import { Operation } from './../models/operation.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(private httpClient: HttpClient) {}

  private idOperation = new BehaviorSubject<string>('');
  private url = 'https://localhost:5001/operations';


  public getAllOperations(): Observable<Operation[]> {
    return this.httpClient.get<Operation[]>(this.url);
  }

  getidOperationObservable(): Observable<string> {
    return this.idOperation.asObservable();
  }

  setidOperation(idOperation: string) {
    this.idOperation.next(idOperation);
  }
}
