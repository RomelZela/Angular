import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    
      mat-card{
        margin-top: 30px;
      }
    
      `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = []
  
  constructor(private heroesService: HeroesService) {
    
    
  }
  
  ngOnInit(): void {
    
      this.heroesService.getHeroes().subscribe( {
        next: (heroes) => this.heroes = heroes,
        error: (err:any) => {console.log(err)}
      })
     }
     
     
}
