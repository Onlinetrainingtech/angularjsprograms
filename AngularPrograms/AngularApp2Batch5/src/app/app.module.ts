import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlidermoduleComponent } from './slidermodule/slidermodule.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { EmployeemoduleComponent } from './employeemodule/employeemodule.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import {RouterModule} from '@angular/router';


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
    //AppRoutingModule
    RouterModule.forRoot([
      {
        path:"n1",
        component:LoginmoduleComponent
      },
      {
        path:"n2",
        component:EmployeemoduleComponent
      }
       
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
