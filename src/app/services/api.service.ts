import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import PontoLocal from '../domain/PontoLocal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URI = 'http://localhost:8083/pontoapi-service/v1/';
  private readonly PONTO_LOCAL_URL = this.BASE_URI.concat('ponto-local');

  constructor(private http: HttpClient,) { }


    public getPontoLocais():Observable<PontoLocal[]> {
        return this.http.get<PontoLocal[]>(this.PONTO_LOCAL_URL);
    }
}