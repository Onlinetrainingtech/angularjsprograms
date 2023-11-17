import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { Directivep1Component } from './directivep1/directivep1.component';

@NgModule({
  declarations: [
    AppComponent,
    Directivep1Component,
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
