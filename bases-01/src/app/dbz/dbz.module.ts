import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    // Los componentes hijos que van a interactuar entre sí.
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    // El componente padre que sera exportado. Unificando
    // los componentes hijos de arriba.
    MainPageComponent
  ],
  imports: [
    // Los modulos. Tanto propios como de terceros.
    CommonModule,
    FormsModule
  ],
  providers: [
    // Para los servicios.
    DbzService
  ]
})
export class DbzModule { }
