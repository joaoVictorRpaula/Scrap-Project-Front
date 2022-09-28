import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Defeito } from '../models/defeito.model';

@Injectable({
  providedIn: 'root',
})
export class DefeitoService {

  constructor(private httpClient : HttpClient) {}

  private url = 'https://localhost:5001/Defeitos';

  public getAllDefeitos(): Observable<Defeito[]> {
    return this.httpClient.get<Defeito[]>(this.url)
  }

}
