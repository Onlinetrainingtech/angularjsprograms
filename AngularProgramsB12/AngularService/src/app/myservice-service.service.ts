import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceServiceService {

  constructor() { }
  showTodayDate()
  {
    let ndate=new Date();
    return ndate;
  }
}
