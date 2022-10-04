import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

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


  buscar(){
    this.onEnter.emit(this.termino);
  }
  
  teclaPresionada(){
    this.debouncer.next( this.termino )
  }
  constructor() { }
  
  ngOnInit(): void {

    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor )
    })

  }

  
}


