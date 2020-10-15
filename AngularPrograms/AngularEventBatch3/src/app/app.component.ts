import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEventBatch3';

  employeename=["azar","mohamed","lohith"];

  isflag=true;

  myClickFunction(event){
    alert("Button is clicked")
    console.log(event);
  }
  changeemp(event)
  {
    alert("Your have select employee")
    console.log(event)
  }
}
