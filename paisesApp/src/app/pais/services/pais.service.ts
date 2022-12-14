import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  private filterUrl: string = '?fields=name,capital,alpha2Code,flag,population,languages'
  

  constructor( private http: HttpClient ) { }

  
  buscarPais(termino:string): Observable<Country[]>{

    const url:string = `${this.apiUrl}/name/${termino}${this.filterUrl}`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital(termino:string): Observable<Country[]>{

    const url:string = `${this.apiUrl}/capital/${termino}${this.filterUrl}`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha(id:string): Observable<Country>{

    const url:string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>( url );
  }

  buscarRegion(termino:string): Observable<Country[]>{
    const url: string = `${this.apiUrl}/region/${termino}${this.filterUrl}`
    return this.http.get<Country[]>(url);
  }

}
