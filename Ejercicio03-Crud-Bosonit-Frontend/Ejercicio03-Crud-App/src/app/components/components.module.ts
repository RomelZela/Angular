import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    
  ],
  exports: [
    FormComponent
  ]
})
export class ComponentsModule { }
