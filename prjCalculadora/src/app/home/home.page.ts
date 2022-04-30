import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1 = undefined;
  num2 = undefined;
  resposta = '';

  constructor() {}

  somar(): void {
    let r = this.num1 + this.num2;
    this.resposta = r.toString();
  }

  subtrair(): void {
    let r = this.num1 - this.num2;
    this.resposta = r.toString();
  }

  dividir(): void {
    let r = this.num1 / this.num2;
    this.resposta = r.toString();

    if (this.num2 == 0){
      this.resposta = "Não existe divisão por 0"
    }
  }

  multiplicacao(): void {
    let r = this.num1 * this.num2;
    this.resposta = r.toString();
  }
}
