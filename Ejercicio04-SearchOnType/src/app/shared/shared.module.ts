import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { ListComponent } from '../list/list.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonToggleModule,
    MatInputModule
  ],
  exports: [
    FormComponent
  ]
})
export class SharedModule { }
