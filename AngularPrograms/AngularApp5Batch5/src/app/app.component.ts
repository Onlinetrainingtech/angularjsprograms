import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp5Batch5';

  onClickSubmit(data)
  {
    alert("Enter the EmailId::"+data.emailid+""+data.pass);
  }
}
