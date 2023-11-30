import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-angularform',
  template:`FavoriteColor:<input type="text" [formControl]="favoriteColorControl">`
})
export class AngularformComponent {
    favoriteColorControl=new FormControl('');
}
