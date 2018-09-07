import { Component } from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: 'box.html'
})
class BoxComponent {

  text: string;
  idade: number;

  constructor() {
    console.log('Sou o console log do component inserido ae');
    this.idade = 12;
    this.text = 'Componente Criado';    
  }

}
export { BoxComponent }
