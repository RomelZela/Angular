import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { PrimeNgComponent } from './ventas/prime-ng/prime-ng.component';


  const routes: Routes = [

{ path: '', component: BasicosComponent, pathMatch: 'full' },
{ path: 'numeros', component: NumerosComponent },
{ path: 'no-comunes', component: NoComunesComponent },
{ path: 'ordenar', component: OrdenarComponent },
{ path: 'prime-ng', component: PrimeNgComponent },
{ path: '**', redirectTo: '' }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
