import { AfterViewInit, ElementRef, Injectable, ViewChild, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, map, Subject, Observable, of, tap, pipe, observable, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService implements OnInit {

  constructor() {

    setTimeout(() => {
      this.pageLoaded()

    }, 0);
  }
  ngOnInit(): void {

    this.setToNumberStep$.subscribe(
      number => this.setToNumberStep = number
    )
  }

  pageLoaded() {

    fromEvent<PointerEvent>(document, 'click')
      .pipe(
        map(id => id.view!.document.activeElement!.id)
      )
      .subscribe(buttonSelected => {

        switch (buttonSelected) {
          case 'start':
            if (!this.canCount) { return }
            this.setCounter(true, true, this.value, 1000, this.setToNumberStep)
            this.canCount = false
            break;

            case 'pause':
            if (this.value == 0) { return }
            this.canCount = true
            this.number$.next(this.value)
            this.setCounter(false)
            break;

            case 'reset':
            if (this.value == 0) { return }
            this.setCounter(false)
            this.canCount = true
            this.value = 0;
            this.number$.next(this.value)
            break;

            case 'countUp':
            this.interval$.unsubscribe();
            this.number$.subscribe({
              next: (number) => this.setNumberStart = number
            })
            this.setCounter(true, true, this.value, 1000, this.setToNumberStep)
            this.canCount = false
            break;

            case 'countDown':
            this.interval$.unsubscribe();

            this.number$.subscribe({
              next: (number) => this.setNumberStart = number
            })

            this.setCounter(true, false, this.value, 1000, this.setToNumberStep)
            this.canCount = false

            break;

          case 'setTo':
            this.setToNumberStart$.subscribe({
              next: (number) => {
                this.setNumberStart = number
              }})
            break;

          case 'step':
            this.setToNumberStep$.subscribe({
              next: (number) => {
                this.setToNumberStep = number
              }})
            break;

          default:
  
            break;
        }
      })

  }

  interval$!: any;
  canCount: boolean = true;
  value: number = 0;
  number$ = new Subject<number>();

  setToNumberStart$ = new Subject<number>()
  setNumberStart = 0;
  setToNumberStep$ = new Subject<number>();
  setToNumberStep = 1;


  setCounter(canCount = false, canCountUp = true, value = 0, speed = 1000, step = 1) {

    if (canCount) {

      this.number$.subscribe(
        (number) => {
          this.value = number++ + this.setNumberStart;
        })
      this.interval$ = interval(speed).subscribe({
        next: (number) => {

          if (canCountUp) {
            this.value = value + (number * step);
            this.number$.next(this.value)
          }
          else {
            this.value = value - (-number * -step);
            this.number$.next(this.value)
          }
        }
      }
      )
    }
    else {
      this.interval$.unsubscribe()
    }
  }


}
