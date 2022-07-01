import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp2Batch11';
  employeename=["mohamed","azar","nitha","raja"];

  isflag=false;

  myclickfunction(event)
  {
    alert("Button is clicked")
    console.log(event)
  }
  changeemp(event)
  {
    alert("Your have select employee")
    console.log(event)
  }

}
