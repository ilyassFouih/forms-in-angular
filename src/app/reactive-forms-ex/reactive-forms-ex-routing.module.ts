import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsExComponent } from './reactive-forms-ex/reactive-forms-ex.component';

const routes: Routes = [{ path: '', component: ReactiveFormsExComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsExRoutingModule { }
