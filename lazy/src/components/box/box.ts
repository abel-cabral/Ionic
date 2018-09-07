import { Component } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: 'box.html'
})
export class BoxComponent {

  text: string;

  constructor() {
    console.log('Sou o console log do component inserido ae');
    this.text = 'Componente Criado';
  }

}
