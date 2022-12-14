import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<p [innerHtml]='uname'></p>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularP2';
  uname:string="Abdur";
}
