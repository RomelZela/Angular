import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(color: number): string {
    return color == 0 ? 'Rojo' : color == 1 ? 'Negro' : color == 2 ? 'Azul' : color == 3 ? 'Verde' : 'Color no definido'
  }

}
