import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../interfaces/ventas.interfaces';
import { OrdenarPipe } from '../pipes/ordenar.pipe';

@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css']
})
export class PrimeNgComponent implements OnInit {
  constructor() {
    
  }

  heroes: Heroe [] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },{
      nombre: 'Robin',
      vuela: true,
      color: Color.azul
    }
    ,
    {
      nombre: 'Daredevil',
      vuela: true,
      color: Color.verde
}
    ,
    {
      nombre: 'asdasd',
      vuela: false,
      color: Color.azul
}
    ,
    {
      nombre: 'Dargfsgsfedevil',
      vuela: false,
      color: Color.negro
}
    ,
    {
      nombre: 'fgaasDaraaedevil',
      vuela: true,
      color: Color.negro
}
]

  ordenarPor: string = 'nombre';

  ordenar(value:string){
    return this.ordenarPor = value;
  }
  
  ngOnInit(): void {
  }
  
}
