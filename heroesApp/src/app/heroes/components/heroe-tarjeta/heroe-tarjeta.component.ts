import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesRoutingModule } from '../../heroes-routing.module';
import { Heroe } from '../../interfaces/heroes.interface';
import { ImagePipe } from '../../pipes/image.pipe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!:Heroe;
  src:any = '';
  
  constructor() { 
    

  }
  
  ngOnInit(): void {
    
    this.src=this.heroe.id
    

  }
  
}
