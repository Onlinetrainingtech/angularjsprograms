import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp4';
  employeename=["pavan","mohamed","danish","jeevith"]

  myclickfunction(event:any)
  {
    alert("Button is clicked")
    console.log(event)
  }
  changeemp(event:any)
  {
    alert("your have select employee")
    console.log(event)
  }
}
