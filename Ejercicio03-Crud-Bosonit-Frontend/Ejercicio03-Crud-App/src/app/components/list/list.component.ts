import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../users.interface';
import { ApidbUsersService } from '../../shared/apidb-users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private apidbUser: ApidbUsersService) {}

  ngOnInit(): void {}

  modifyUser(email: any) {

    this.filterID = this.users.find(user => user.id == email);
    this.userForModify.emit(this.filterID);
  }

  deleteUser(email: any) {
    
    this.apidbUser.deleteUser(email).subscribe({
      next: () => this.apidbUser.getList(),
      error: (err) => console.log(`Ha ocurrido un error en list-components.ts/deleteUsers() `, err)
    })
  }

  filterID!: any;
  @Output() userForModify = new EventEmitter<User>()
  @Input() users!: User[];
}
