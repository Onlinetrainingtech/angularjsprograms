import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  /*t1 = 'Welcome to the appcomponents';
  employeename=["mohamed","azar","raja","mohan"]
  isflag=true;

  myClickfunction(event)
  {
    alert("Your Button is called");
    console.log(event)
  }*/

  allowNewServer=false;
  serverCreationStatus='No Server is created';
  serverName='TestServer';
  serverCreated=false;
  ngOnInit()
  {

  }
  constructor()
  {
    setTimeout(()=>{
      this.allowNewServer=true;
    },3000);
    
  }
  
 
  onCreateServer()
  {
    this.serverCreated=true;
    this.serverCreationStatus='Server is created Name of the Server is'+this.serverName;
  }
  onUpdateServerName(event:Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
