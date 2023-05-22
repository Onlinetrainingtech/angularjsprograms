import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    AddadminComponent,
    ViewdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
