import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { EmployeeComponent } from './employee/employee.component';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

   /*RouterModule.forRoot([
    {
    path:'n1',
    component:NewComponentComponent,
   },
   {
    path:'n2',
    component:EmployeeComponent,
   }
   ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
