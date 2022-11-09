import { Component, OnInit, NgModule } from '@angular/core';
import { Observable, Subject, fromEvent, tap } from 'rxjs';
import { map } from 'rxjs/operators';

import { ControllerService } from '../controller.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  constructor(private controllerService: ControllerService) {

    
  }
  
  
  ngOnInit(): void {
    this.controllerService.number$.subscribe({
      next: (number) => {
        this.number = number 
    }

   })
}
  
setTo($event: any){
  
  this.controllerService.setToNumberStart$.next($event.target.value)
}

setStep($event: any){
  this.controllerService.setToNumberStep$.next($event.target.value)
}


  number = 0;
  opctionActived!: any;
}
