import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservieServiceService {

  constructor() { }
  showTodayDate(){
    let ndate=new Date();
    return ndate;
  }
}
