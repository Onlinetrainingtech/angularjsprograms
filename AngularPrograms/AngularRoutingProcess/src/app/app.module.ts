import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { EmployeeComponent } from './employee/employee.component';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    EmployeeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot([ 
      { 
path:  'n1' , 
component:NewComponentComponent,//class of component-->new-component.ts
      },
      {
        path:  'n2' , 
component:EmployeeComponent,//class of component-->employee.component.ts
      },
      {
        path:  'n3' , 
component:DashboardComponent,//class of component-->dashboard.component.ts
      }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
