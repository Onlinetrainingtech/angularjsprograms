import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBindingProcess';

  //Creating an Array

  employeename=["mohamed","azar","Imran","Abdur"];

  isflag=true;

  myClickfunction(event)
  {
    alert("Your Button is clicked");
    //console.log(event.target);
    console.log(event);
  }
}