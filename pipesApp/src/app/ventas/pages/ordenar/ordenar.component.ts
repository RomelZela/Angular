import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {
  constructor() { }
  
  nombreCompleto: string = 'Romel Zela Al Hajari'
  convertir: boolean = true;

  cambiarString() {
    this.convertir = !this.convertir;
  }



  ngOnInit(): void {
  }

}
