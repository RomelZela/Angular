import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Covid } from './interfaces/covid';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ApiCovidService {

  baseUrl:string = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/europe';


  httpOption = new HttpHeaders({
    'X-RapidAPI-Key': 'e579c59624msh5bd682539c5438bp1ff069jsn541afada32db',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'

  })
  constructor(private http: HttpClient){ 
   
    
  }
  
  getStatistics():Observable<Covid[]>{

    return this.http.get<Covid[]>(`${this.baseUrl}`,{ headers:this.httpOption })
}
  
  async getDataTotalCases(){
     this.getStatistics().subscribe({
      next: (covidStatitics) => covidStatitics.forEach( (covidStatitics) => {
        this.covidTotalCases.push(covidStatitics.TotalCases),
        this.covidTotalDeaths.push(covidStatitics.TotalDeaths),
        this.covidCountry.push(covidStatitics.Country)
      }),
      error: (err) => console.log('Un error ha ocurrido con la api ', err)
    })
  }

  

covidTotalDeaths: number[] = []
covidTotalCases: number[] = []
covidCountry: string[] = []
  }



