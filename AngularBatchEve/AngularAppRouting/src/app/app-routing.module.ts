import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [

  {path:'n1',component:NewComponentComponent},
  {path:'n2',component:EmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
