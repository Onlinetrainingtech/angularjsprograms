import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataBinding';


  employeename=["mohamed","azar","raja"]

  //isflag=true;

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
