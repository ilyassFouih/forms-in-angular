import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/reactive-forms",
    pathMatch:"full"
  },
  {
    path: 'reactive-forms',
    loadChildren: () => import('./reactive-forms-ex/reactive-forms-ex.module').then(m => m.ReactiveFormsExModule)
  },
  { path: 'template-forms', loadChildren: () => import('./template-forms-ex/template-forms-ex.module').then(m => m.TemplateFormsExModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
