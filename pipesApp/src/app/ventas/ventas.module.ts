import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';



@NgModule({
  declarations: [
    NoComunesComponent,
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    PrimeNgComponent,
    MayusculasPipe,
    PrimeNgComponent,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NoComunesComponent,
    BasicosComponent,
    NoComunesComponent,
    NumerosComponent,
    OrdenarComponent,
    MayusculasPipe,
    PrimeNgComponent
  ]

})
export class VentasModule { }
