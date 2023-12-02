import { Component } from '@angular/core';
import { MyserviceServiceService } from './myservice-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularService';
  todaydate:any;
  constructor(private myservice:MyserviceServiceService)
  {

  }
  ngOnInit()
  {
    this.todaydate=this.myservice.showTodayDate();
  }
}
