import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Remember } from '../Remember';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root',
})
export class RememberService {
  private baseApiUrl = 'http://localhost:3333/';
  private apiUrl = `${this.baseApiUrl}api/remember`;

  constructor(private http: HttpClient) {}

  getRemembers(): Observable<Response<Remember[]>> {
    return this.http.get<Response<Remember[]>>(this.apiUrl);
  }

  createRemember(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
