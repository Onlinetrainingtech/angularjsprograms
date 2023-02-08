import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent {

  newcomponent="Enter in new component";
  todaydate:any;
  constructor(private myservice:MyserviceService){}

   ngOnInit()
   {
    this.todaydate=this.myservice.showTodayDate();
   }
}
