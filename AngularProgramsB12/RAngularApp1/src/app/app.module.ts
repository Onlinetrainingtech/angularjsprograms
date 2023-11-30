import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Directivep1Component } from './directivep1/directivep1.component';
import { AngularformComponent } from './angularform/angularform.component';
import { AngularTemplateDriveComponent } from './angular-template-drive/angular-template-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    Directivep1Component,
    AngularformComponent,
    AngularTemplateDriveComponent,
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
