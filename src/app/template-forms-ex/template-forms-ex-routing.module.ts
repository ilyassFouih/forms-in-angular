import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateFormsExComponent } from './template-forms-ex/template-forms-ex.component';

const routes: Routes = [{ path: '', component: TemplateFormsExComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormsExRoutingModule { }
