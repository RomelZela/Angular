import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activedroute: ActivatedRoute,
               private heroeService: HeroesService,
               private router: Router ) 
  {
  }
  
  ngOnInit(): void {
    this.activedroute.params.pipe(
      switchMap( ({id}) => this.heroeService.getHeroesID(id) )).subscribe({
        next: (heroe:Heroe) => this.heroe = heroe,
        error: (error) => console.warn('Console: Heroe - Error: ', error)}
         )
        
  }
  
  regresar() {

    this.router.navigate(["/heroes/listado"])
  }
}