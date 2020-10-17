import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormsExRoutingModule } from './template-forms-ex-routing.module';
import { TemplateFormsExComponent } from './template-forms-ex/template-forms-ex.component';


@NgModule({
  declarations: [TemplateFormsExComponent],
  imports: [
    CommonModule,
    TemplateFormsExRoutingModule
  ]
})
export class TemplateFormsExModule { }
