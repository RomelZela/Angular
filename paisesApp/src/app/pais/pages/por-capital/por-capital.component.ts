import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  termino:string = '';
  hayError:boolean= false;
  paises: Country[] = [];
  
  buscar(termino: string){
    this.termino=termino;
    this.paisService.buscarCapital(termino).subscribe({
      next: (paises:Country[]) => {
        this.paises = paises;
        console.log(this.paises)
      },
      error: (err) => {
        console.log(err)
        this.hayError = true;
        this.paises = []
      }
    }
    )
  }
  quitarError(){
    this.hayError=false;
  }
  
  sugerencias(termino:string){
    this.hayError = false;
  }
}
