import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent{

  constructor(private primengConfig: PrimeNGConfig) {}

  // i18nSelect
  nombre: string = 'Romel';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
    
  }

// i18nPlural

  clientes: string[] = [' Romel0',' Carmen1',' Maria2',' Lola3',' Miguel4']

  clientesMapa = {
    '=0': 'ningún cliente esperando',
    '=1': ' un cliente esperando',
    'other': ' # clientes esperando',
    // El númeral sirve para determinar la cantidad de clientes que hay en el array Clientes.

    
  }

  // Slice
  cambiarCliente(){
    this.nombre = 'Carmen'
    this.genero= 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }


  //KeyValue & Json

  persona = {
    nombre: 'romel',
    apellido: 'zela',
    estado: 'soltero',
    profesion: 'programador',
    edad: 28 + ' años'
  }

  // Async
  miObservable = interval(1000)
  
  valorPromesa = new Promise( (res, rej) => {
    setTimeout(() => {
      res('Tenemos la data de la promesa')
    }, 3000)
  })

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
