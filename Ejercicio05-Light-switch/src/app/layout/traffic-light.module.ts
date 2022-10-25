import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller/controller.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    ControllerComponent,
    TrafficLightComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,

    MaterialModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class TrafficLightModule { }
