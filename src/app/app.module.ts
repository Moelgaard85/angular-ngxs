import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TutorialsModule } from './tutorials/tutorials.module';
import { AppRoutingModule } from './app-routing.module';
import { TutorialState } from './tutorials/state/tutorial.state';
import { AppState } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      AppState,
      TutorialState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    TutorialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
