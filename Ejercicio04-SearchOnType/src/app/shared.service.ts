import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universities } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `http://localhost:3000/universities/?alpha_two_code=`

  universitiesForCountry(country: string){
    return this.http.get<Universities[]>(`${this.baseUrl}${country}`)
  }

}
