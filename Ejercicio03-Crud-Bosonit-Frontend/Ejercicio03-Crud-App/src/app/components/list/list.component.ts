import { Component, Directive, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { User } from '../users.interface';
import { ApidbUsersService } from '../../shared/apidb-users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private apidbUser: ApidbUsersService) { 

  }

  ngOnInit(): void {

  }
  modifyUser(email: any){
    console.log('modificar Usuario', typeof email)
  }

  
  deleteUser(email: any){
    console.log(this.users, ' Before')

    this.apidbUser.deleteUser(email).subscribe({
      next: (users) => console.log('Usuario eliminado desde list-component. deleteUser()'),
      error: (err) => console.log(`Ha ocurrido un error en list-components.ts/deleteUsers() `, err)
    })


    this.ngOnInit();

    console.log(this.users, ' After')
  }


  @Input() users!:User[];
}
