import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    todaydate;

  constructor(private myservice1:MyserviceService) { }

  ngOnInit(): void {
    this.todaydate=this.myservice1.showTodayDate();
  }

}
