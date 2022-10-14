import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp2';

  employeename=["mohamed","azar","raja"]

  isflag=false;

  myclickfunction(event:any)
  {
    alert("Button is Clicked")
    console.log(event)
  }
  changeemp(event:any)
  {
    alert("You have select employee")
    console.log(event)
  }
}
