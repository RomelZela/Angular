import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControllerComponent } from './controller/controller.component';
import { ControllerService } from './controller.service';

@NgModule({
  declarations: [
    AppComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
