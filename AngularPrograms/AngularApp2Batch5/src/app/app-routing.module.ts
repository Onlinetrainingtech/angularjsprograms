import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import {EmployeemoduleComponent} from './employeemodule/employeemodule.component';

const routes: Routes = [

  // {path:'n1',component:LoginmoduleComponent},
  // {path:'n2',component:EmployeemoduleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
