import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrafficLightService } from '../traffic-light.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  constructor(private serviceController: TrafficLightService) { }

  ngOnInit(): void {
    this.serviceController.$turnLightColors.subscribe({
      next: (color) => {
        this.colorActive = color;
      }
    })
  }
  switchLight() {
    this.switchBoolean = !this.switchBoolean
    this.turnOnLight.emit(this.switchBoolean)
  }

  // turnOnOf!: boolean

  colorActive!: string;
  @Output() turnOnLight = new EventEmitter<boolean>();

  switchBoolean: boolean = false;
}
