import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {
  color = 'red';
  model:any = 7;
  events:Array<string> = [];
  users = [
      {firstName: 'Enzo', lastName: 'Nicolorich', birthDate: '14-03-1989', dni: 34366107},
      {firstName: 'Ivan', lastName: 'Daigual', birthDate: '11-02-2000', dni: 35366107},
      {firstName: 'Fabio', lastName: 'Nicolorich', birthDate: '15-08-1990', dni: 34437804}
    ];
  constructor() {
    this.users = [
      {firstName: 'Enzo', lastName: 'Nicolorich', birthDate: '14-03-1989', dni: 34366107},
      {firstName: 'Ivan', lastName: 'Daigual', birthDate: '11-02-2000', dni: 35366107},
      {firstName: 'Fabio', lastName: 'Nicolorich', birthDate: '15-08-1990', dni: 34437804}
    ]
  }

 public toNumber():void {
   this.model = +this.model;
 }

 log(param:string) {
  this.events.push(param);
 }

  ngOnInit() {
  }

}
