import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Universities } from '../interfaces';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private apiDbUniversities: SharedService) { }

  ngOnInit(): void {
  }

  submit($event: MatButtonToggleChange) {

    console.log($event.value)


    this.apiDbUniversities.universitiesForCountry($event.value).subscribe({
      next: (listUniversities) => this.universitiesForCountry = listUniversities

    });
  }

  inputSearch() {
    if (this.universitiesForCountry) {
      console.log(this.valueInput)
      this.listUnivesitiesFiltred = this.universitiesForCountry.filter(
        listUniversitiesFiltred => listUniversitiesFiltred.name.toLocaleLowerCase().includes(this.valueInput.toLocaleLowerCase()));
    }
    else {
      return
    }
  }

  listUnivesitiesFiltred!: Universities[]
  countrySelect!: string;
  universitiesForCountry!: Universities[];
  fontStyle!: string;
  valueInput!: string;
}
