import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventProces';
  employee=["mohamed","azar","ompra","likhit","yamuna","jasmeen"]

  isflag=false;

  myClickFunction(event)
  {
    alert("Button to Clicked")
    console.log(event);
  }
}
