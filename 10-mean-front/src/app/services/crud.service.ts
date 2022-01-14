import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private baseUrl = environment.baseUrl;
  private _user: any = JSON.parse(localStorage.getItem('user')!);

  get user() {
    return this._user;
  }

  constructor(private httpClient: HttpClient) {}

  read() {
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.httpClient.get<any>(`${this.baseUrl}/task/read`, { headers });
  }

  delete(id: string) {
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.httpClient.delete<any>(`${this.baseUrl}/task/delete/${id}`, {
      headers,
    });
  }

  create(value: string) {
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.httpClient.post<any>(
      `${this.baseUrl}/task/create`,
      { nombre: value },
      {
        headers,
      }
    );
  }

  update(id: string, value: string) {
    const headers = {
      'x-auth-token': this.user.token,
    };

    return this.httpClient.put<any>(
      `${this.baseUrl}/task/update/${id}`,
      { nombre: value },
      {
        headers,
      }
    );
  }
}
