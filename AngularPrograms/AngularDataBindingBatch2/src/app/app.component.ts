import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataBindingBatch2';
  //declared array of months

  employeename=['mohamed','azar','raja','aravind'];

  //isavailable=true;//variable is set to true

  isavailable=false;
}
