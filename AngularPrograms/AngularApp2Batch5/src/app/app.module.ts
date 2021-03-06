import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidermoduleComponent } from './slidermodule/slidermodule.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { EmployeemoduleComponent } from './employeemodule/employeemodule.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidermoduleComponent,
    LoginmoduleComponent,
    EmployeemoduleComponent,
    ViewemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
