import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

constructor(public serviceApp: AppService) {
  this.serviceApp.messageChild$.subscribe(msg => this.message = msg)
}

ngOnInit(): void {}

service(){
  this.serviceApp.setMessageFromServiceToParent(this.messageForServiceToParent)
}

input() {
  this.messageForInput = `Input using input property`;
}

observable() {
 this.serviceApp.messageObservableForParent()
}


output(value:string){
  this.message = value
}
    message!: string;

    messageForInput!: string ;
    messageForServiceToParent = `Parent using service`
    
    messageFromOutput!:string;

}

