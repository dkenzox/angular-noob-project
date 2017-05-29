import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noob Project!';
  nombre = 'Enzo';
  test = 'Hola, estoy probando ' + this.nombre + ' otro text';
  newTest = `Hola, estoy probando ${this.nombre} otro text ${this.title}`;
}
