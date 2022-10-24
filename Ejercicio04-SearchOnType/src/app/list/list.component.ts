import { Component, Input, OnInit } from '@angular/core';
import { Universities } from '../interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  universitiesFilter!: Universities[]
  @Input() universities!: Universities[]
}
