import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp6Batch4';

  onClickSubmit(data)
  {
    alert("Enter the Email id::"+data.emailid+""+data.passwd);
  }
}
