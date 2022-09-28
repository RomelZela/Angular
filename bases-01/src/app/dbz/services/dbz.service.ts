import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    personajesArray: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];
      
    constructor(){
        console.log('Servicio inicializado')
    }
    agregarNuevoPersonaje( pesonaje: Personaje ) {
        this.personajesArray.push(pesonaje)
      }
      
}