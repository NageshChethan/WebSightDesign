import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  // title = 'Content Validation Process';
  BGImagPath :string='assets/Images/banner9.jpg'; 
  CurrentRouter: string; 
  status:boolean=false;

  showMenu(){
    this.status =!this.status;
  }
}
