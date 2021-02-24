import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataBinding';
  name="";
  //declared array of employee

  empname=["mohamed","Jasmeen","likhit","omprash","yamuna"]
}
