import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsRoutingModule { }


