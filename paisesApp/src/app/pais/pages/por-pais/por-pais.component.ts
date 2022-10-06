import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent{
  constructor(private paisService: PaisService) { }
  
  termino:string = '';
  hayError:boolean= false;
  paises: Country[] = [];
  paisesSurgeridos: Country[] = []
  mostrarSugerencia:boolean=false;
  
  buscar(termino: string){
    this.termino=termino;
    this.paisService.buscarPais(termino).subscribe({
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
  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;

    this.paisService.buscarPais(termino)
      .subscribe({
        next: (paises => this.paisesSurgeridos = paises.splice(0, 5)),
        error: (err => {
          console.log(err)
          this.paisesSurgeridos = []
        })
      })
  }

}
