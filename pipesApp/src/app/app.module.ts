import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Cambiar el local de la app
import localES from'@angular/common/locales/es-EA';
import {registerLocaleData} from '@angular/common'
import { FieldsetModule } from 'primeng/fieldset';
registerLocaleData(localES);
// Y luego lo ponemos en providers para cambiar el idioma de toda la app.

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FieldsetModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
    
  ],
  providers: [
/* Continua en esta linea el cambio de idioma --> */  {provide: LOCALE_ID, useValue: 'es-EA'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 