import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_CONFIG_TOKEN, IApiConfig } from '../constants/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(
    private readonly http: HttpClient,
    @Inject(API_CONFIG_TOKEN) private readonly config: IApiConfig
  ) {
    this.baseUrl = `${this.config.baseUrl}/todos`;
  }

  private baseUrl = '';


  get<T>() {
    const headers = new HttpHeaders()
    .set('my-token', 'tokenValue');
    return this.http.get<T>(this.baseUrl, { headers });
  }

  put<P, R>(payload: P, id: number) {
    const params = new HttpParams()
    .set('date', '2024-02-04');
    return this.http.put<R>(this.baseUrl + '/' + id, payload, { params });
  }

  patch<P, R>(payload: P, id: number) {
    return this.http.patch<R>(this.baseUrl + '/' + id, payload);
  }

  post<P, R>(payload: P) {
    return this.http.post<R>(this.baseUrl, payload);
  }

  delete<T>(id: number) {
    return this.http.delete<T>(this.baseUrl + '/' + id);
  }
}
