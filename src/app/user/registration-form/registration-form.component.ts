import { Component, OnInit } from '@angular/core';
import { FormsModule }        from '@angular/forms';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public user = {};
  public test:string ='hola';
  public register(event) {
    event.preventDefault();
    console.log('holis!');
  }
  constructor() {}

  ngOnInit() {}

  
}
