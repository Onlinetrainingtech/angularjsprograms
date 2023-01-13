import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularP3';
  //creating an array
  employeename=["mohamed","azar","Imran","xyz"]

  isflag=false;
  myClickfunction(event:any)
  {
    alert("Your Button is clicked")
    console.log(event)
  }
}
