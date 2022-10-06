import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MenubarModule,
    CardModule,
    FieldsetModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule,
    
    


  ]
})
export class PrimeNgModule { }
