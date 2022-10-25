import { Component, OnInit } from '@angular/core';
import { TrafficLightService } from '../traffic-light.service';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  constructor(private serviceController: TrafficLightService ) { }

  ngOnInit(): void {
    this.serviceController.$turnLightColors.subscribe({
      next: (color) => this.colorActive = color
    })
  }

  switchLight($event:any){
      this.serviceController.turnOnOf($event)
    }

  colorActive!: string;
  }



