import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp3Batch5';

  //array of employee details

  employeenames=["mohamed","abi","azar","raja"]

  isflag=true;

  myfuncclick(event)
  {
    alert("Button is clicked")
  }
}
