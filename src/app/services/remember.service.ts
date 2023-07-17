import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Remember } from '../Remember';

@Injectable({
  providedIn: 'root',
})
export class RememberService {
  private baseUrl: string = 'http://localhost:3333/'; // URL base da api
  private baseApiUrl = this.baseUrl;
  private apiUrl = `${this.baseApiUrl}api/remember`;

  constructor(private http: HttpClient) {}

  createRemember(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
