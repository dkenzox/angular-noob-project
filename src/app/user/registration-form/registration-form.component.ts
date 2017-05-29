import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public user = {};
  public test:string;
  public register(event) {
    event.preventDefault();
    console.log('holis!');
  }



  constructor() {
    
  }
  ngOnInit() {}

  
}
