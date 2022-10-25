import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficLightService {
  constructor() {}

  turnOnOf(on: boolean) {
    if (on) {
      this.timerOn = setInterval(() => {
        this.$turnLightColors.next(this.colors[this.iterations])
        this.iterations++
        if (this.iterations == 3) {
          this.iterations = 0;
          clearInterval(this.timerOn)
        }
      }, 1500)
    } else { clearInterval(this.timerOn) }
  }

  turnON() {
    if (this.iterations == 2) {
      clearInterval(this.timerOn)

    }
    console.log(this.iterations)
  }

  $turnLightColors = new Subject<string>();
  iterations: number = 0;
  colors: string[] = ['red', 'yellow', 'green']
  timerOn: any;
}