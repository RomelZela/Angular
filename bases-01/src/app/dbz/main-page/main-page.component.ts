import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { DbzService } from '../services/dbz.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  personajesArray: Personaje[] = [];  

    nuevo: Personaje = {
      nombre: '',
      poder: 0
}

// El evento ejecuta esta función y la almacena


  constructor(private dbzService:DbzService){
    this.personajesArray = this.dbzService.personajesArray;
    dbzService.agregarNuevoPersonaje(this.nuevo);
  }
}
