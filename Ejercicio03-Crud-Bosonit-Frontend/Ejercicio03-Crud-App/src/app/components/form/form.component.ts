import { Component, OnInit } from '@angular/core';
import { User } from '../users.interface';
import { Countries } from './countries-cities-list';
import { ApidbUsersService } from '../../shared/apidb-users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor(private apidbUsers: ApidbUsersService) {

  }
  ngOnInit(): void {
    this.apidbUsers.getUsers().subscribe({
      next: (users) => this.users = users
    })
  }

  checkPassword(){
    if(this.passwordx1 == this.user.password){
      this.user.password = this.passwordx1
      this.isPasswordTrue = true;
    }
    else {
      this.isPasswordTrue = false
    }
  }

  findCities(){
    this.indexCountry = this.countries.findIndex(city => city.pais == this.countrySelected) 
    this.citiesList = this.countries[this.indexCountry].ciudades;
    this.user.pais = this.countrySelected;

  }
  guardar(){
    
    this.apidbUsers.postUser(this.user).subscribe({
      next: (user) => this.users.push(user),
      error: (err) => console.log('No ha sido posible almacenar el user en form.component/guardar()', err)
    });


  }



  user: User = {
    id: '', 
    usuario: '',  
    password: '',  
    suscrito: true, 
    pais: '',
    ciudad: ''
  }

  users!:User[];
  countrySelected!: string;
  indexCountry!: number;
  citiesList!: string[];
  countries = Countries
  passwordx1!: string;
  passwordx2!: string;
  isPasswordTrue: boolean = true;

}
