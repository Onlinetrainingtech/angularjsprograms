import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  todaydate;

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void 
  {
     this.todaydate=this.myservice.showTodayDate();
  }

}
