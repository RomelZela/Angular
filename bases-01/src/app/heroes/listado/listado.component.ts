import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeDeleted: string[] = [];
  heroesDeleted: string[] = [];

  borrarHeroe(index: number): string[] {

    this.heroeDeleted = this.heroes.splice(index, 1)
    this.heroesDeleted.push(this.heroeDeleted.toString())
    return this.heroes, this.heroesDeleted;
  }
    
}
