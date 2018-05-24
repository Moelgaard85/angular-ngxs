import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './tutorials/pages/tutorials/tutorials.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tutorials'
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
