import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-newcmp',
  templateUrl: './newcmp.component.html',
  styleUrls: ['./newcmp.component.css']
})
export class NewcmpComponent implements OnInit {

  todaydate;

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void 
  {
    this.todaydate=this.myservice.showTodayDate();
  }

}
