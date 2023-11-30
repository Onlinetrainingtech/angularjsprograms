import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-angular-template-drive',
  templateUrl: './angular-template-drive.component.html',
  styleUrls: ['./angular-template-drive.component.css']
})
export class AngularTemplateDriveComponent {

  powers=["ReallySmart","SuperFlexible"];
  model=new Hero(18,'DR Azar',this.powers[0],'ChuckOverstreet')
  submitted=false;
  onSubmit(){
    this.submitted = true;
  }
  getdiagnostic(){
    return JSON.stringify(this.model);
  }
}
