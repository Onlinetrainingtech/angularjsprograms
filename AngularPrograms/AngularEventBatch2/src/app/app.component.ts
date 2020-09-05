import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEventBatch2';
  //array of employee
  employeenames=["azar","mohamed","raja"];
  isavailable=true;
  myClickFunction(event)
  {
    alert("Button is Clicked..");
  }
}
