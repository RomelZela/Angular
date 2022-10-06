import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit{
  termino: string = '';
  busqueda: string = '';
  
  
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() paisesSugeridos: Country[] =[];
  @Input() placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();

  buscal(){
    this.onDebounce.emit(this.busqueda)
  }


  buscar(termino: string){
    this.termino = termino;
    this.onEnter.emit(this.termino);
  }
  
  teclaPresionada(){
    this.debouncer.next( this.termino )
  }
  constructor(private paisService: PaisService) { }
  
  hayError:boolean= false;
  paises: Country[] = [];
  paisesSurgeridos: Country[] = []
  mostrarSugerencia:boolean=false;
  
  ngOnInit(): void {

    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor )
    })

  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino=termino;
    this.mostrarSugerencia=true;

    this.paisService.buscarPais(termino)
    .subscribe({
      next: (paises => this.paisesSurgeridos = paises.splice(0,5)),
      error: (err => {console.log(err)
      this.paisesSurgeridos = []
    }
    )
}
    )
}

  buscarSugerido(termino:string){
    this.buscar(termino);
    
  }
}


