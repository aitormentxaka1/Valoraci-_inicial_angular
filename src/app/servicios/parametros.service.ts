import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Param } from '../interfaces/param';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParametroService {
  private apiUrl = 'http://localhost:3000/parametros';

  constructor(private http: HttpClient) {}

  getParametros(): Observable<Param[]> {
    return this.http.get<Param[]>(this.apiUrl);
  }

  getParametro(id: string): Observable<Param> {
    return this.http.get<Param>(`${this.apiUrl}/${id}`);
  }

  addParametro(parametro: Param): Observable<Param> {
    return this.http.post<Param>(this.apiUrl, parametro);
  }

  updateParametro(id: string, parametro: Param): Observable<Param> {
    return this.http.put<Param>(`${this.apiUrl}/${id}`, parametro);
  }

  deleteParametro(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  descargarJSON(): Observable<Blob> {
    return this.http.get(this.apiUrl, { responseType: 'blob' });
  }
}
