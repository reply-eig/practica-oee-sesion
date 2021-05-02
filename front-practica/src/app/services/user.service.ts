import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from 'src/app/services/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user!: User;
  public auth: boolean;
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public setUser( name: string, email: string, age: number, passwd: string) {
    this.user.name = name;
    this.user.email = email;
    this.user.age = age;
    this.user.passwd = passwd;
  }

  

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  public loginUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiServerUrl}/user/find`, user);
  }
}
