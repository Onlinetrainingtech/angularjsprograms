import { Component } from '@angular/core';

@Component({
  selector: 'app-directivep1',
  templateUrl: './directivep1.component.html',
  styleUrls: ['./directivep1.component.css']
})
export class Directivep1Component {

  title="One way Property Binding.."
   bool='true';
  src='https://www.bigbasket.com/media/uploads/p/l/10000070_15-fresho-carrot-orange.jpg?tr=w-640,q=80'
  serverID:number=10;
  serverStatus:string='Online';
}
