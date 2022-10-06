import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {


  transform(value: Heroe[], orderPor = 'sin valor'): Heroe[] {

    if(orderPor === 'color'){
      return value.sort( (a,b) => a.color > b.color ? 1 : -1)
    }


    if(orderPor === 'nombre'){
      return value.sort!( (a,b) => a.nombre > b.nombre ? 1 : -1)
    }
    else{
      return value
    }

  }
}
