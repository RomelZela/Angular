import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      body{margin:50px}
      .message{
        background-color: rgba(255, 255, 0, 0.3);
        width: fit-content;
        padding:10px;
        margin: 20px;
        border:1px solid yellow;
        border-radius:5px;
      } 
    `
  ]
})
export class AppComponent {
  title = 'Ejercicio1-displayhide-Bosonit-Frontend';

  display:boolean = false;
  nameButton: string = 'Enseñar'

  toggle(){
    this.display = !this.display;
    this.display === true ? this.nameButton = 'Esconder' : this.nameButton = 'Enseñar';
  }

}
