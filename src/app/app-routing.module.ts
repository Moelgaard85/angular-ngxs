import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './tutorials/pages/tutorials/tutorials.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tutorials'
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AppGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
