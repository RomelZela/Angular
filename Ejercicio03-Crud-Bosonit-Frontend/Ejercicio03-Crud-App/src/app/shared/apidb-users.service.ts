import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/users.interface';

@Injectable({
  providedIn: 'root'
})
export class ApidbUsersService {

  private baseUrl: string = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  postUser(user: User):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}`, user)
  }

  deleteUser(user: string):Observable<User[]>{
    return this.http.delete<User[]>(`${this.baseUrl}/${user}`)
     

  }
}
