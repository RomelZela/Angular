import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})


export class AgregarComponent {
  @Input()  nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  // onNuevoPersonaje: Nombre del evento que se disparará cuando se le llame.
  // EventEmitter: Indica que onNuevoPersonaje emitirá un evento
  // <Personaje>: Indica que el evento emitido será de tipo Personaje.

  agregar() {

    this.onNuevoPersonaje.emit( this.nuevo )
// Se ejecuta el evento emitiendo el valor contenido en this.nuevo:'Personaje'
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}




