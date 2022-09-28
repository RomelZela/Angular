import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent{

  @Input('Data') personajes: Personaje[] = []
  // personajes.components.ts
}
// ¿ Cómo vamos a recibir la info?
//    ¡ A través de un input !