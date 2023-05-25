import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp4';
  employeename=["mohamed","azar","xyz","sheik"]
  //isflag=true;
  isflag=false;
  myclickfunction(event:any)
  {
    alert("This is button is click")
  }

  changeemp(event:any)
  {
     alert("Your have select employee")
  }
}
