import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../../shared/app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private serviceApp: AppService) {
    serviceApp.messageParent$.subscribe(
      msg => this.message = msg
    )
  }

  ngOnInit(): void { }

  service() {
    this.serviceApp.setMessageFromServiceToChild(this.messageForServiceToChild)
  }

  output() {
    this.messageOutputFromChildToParent.emit(this.messageForOutput)
  }

  observable() {
    this.serviceApp.messageObservableForChild();
  }



  messageForServiceToChild: string = `Child using service`
  messageForOutput: string = `Child using output event`;

  @Input() message!: string;
  @Output() messageOutputFromChildToParent = new EventEmitter<string>();
}
