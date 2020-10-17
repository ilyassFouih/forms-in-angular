import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsExRoutingModule } from './reactive-forms-ex-routing.module';
import { ReactiveFormsExComponent } from './reactive-forms-ex/reactive-forms-ex.component';


@NgModule({
  declarations: [ReactiveFormsExComponent],
  imports: [
    CommonModule,
    ReactiveFormsExRoutingModule
  ]
})
export class ReactiveFormsExModule { }
