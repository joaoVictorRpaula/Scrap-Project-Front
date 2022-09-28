import { Partnumber } from './../models/Partnumber.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}
)
export class PartnumberService {

constructor(private httpClient: HttpClient) { }

private url = "https://localhost:5001/partnumbers"

getAllPartnumbers() : Observable<Partnumber[]>{
  return this.httpClient.get<Partnumber[]>(this.url)
}

}
