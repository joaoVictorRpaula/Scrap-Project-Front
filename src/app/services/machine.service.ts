import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

private url = "https://localhost:5001/machines"

constructor(private httpClient : HttpClient) { }

getAllMachinesFromOperation(operationId: any): Observable<Machine[]>{
  const urlOperation = this.url + "/Operation/" + operationId;


  return this.httpClient.get<Machine[]>(urlOperation);
}

}
