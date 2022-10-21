import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  rutaIMG: string = '';


  transform(value: Heroe): string {
      
    this.rutaIMG = `assets/heroes/${value.id}.jpg`

    return this.rutaIMG}

    // if(this.rutaIMG)




    // return true = `assets/heroes/${value.id}.jpg`
    // else {  console.log(`assets/no-image.png`, 'else pipe')
    //   return `./assets/no-image.png`}

}
