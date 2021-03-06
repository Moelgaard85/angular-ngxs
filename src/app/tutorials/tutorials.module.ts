import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { TutorialsRoutingModule } from './tutorials-routing.module';
import { NgxsModule } from '@ngxs/store';
import { TutorialState } from './state/tutorial.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  imports: [
    CommonModule,
    TutorialsRoutingModule,
    AdminModule
  ],
  declarations: [TutorialsComponent, ReadComponent, CreateComponent]
})
export class TutorialsModule { }

