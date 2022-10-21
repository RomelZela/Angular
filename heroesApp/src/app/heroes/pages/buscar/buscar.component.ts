import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { HeroesModule } from '../../heroes.module';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  filteredOptions: any;
  myControl: any;
  termino: string= '';
  heroes:Heroe[] = [];
  
  
  constructor( private heroeService: HeroesService) { }
  
  ngOnInit(): void {
  }
    
    
    buscando(){
      console.log('ave')
      this.heroeService.getHeroes().subscribe({
        next: (heroes:Heroe[]) => this.heroes = heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(this.termino)),
        error: (error:any) => console.log(error)}
        )

    // this.heroeService.getHeroesSearch(this.termino).subscribe(
    //   {heroes} => heroes.superhero.includes((this.termino) => this.heroes[] = heroes)
    // )
  }

}
