import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <button (click)="acumularChido(base)">+ {{ base }}</button>
    <span>{{ contador }}</span>
    <button (click)="acumularChido(-base)">- {{ base }}</button>
  `
})

export class ContadorComponent {
  public titulo: string = 'Contador App';
  public contador: number = 10;
  base: number = 5;

  public aumentarContador = () => this.contador = this.contador + 1;
  public disminuirContador = () => this.contador = this.contador - 1;
  acumular(accion: string) {
    accion === 'sumar' ? this.contador += 1 : this.contador -= 1
  }
  public acumularChido = (valor: number) => this.contador += valor;
  public acumularBase = (valor: number) => this.contador = this.contador + (this.base * valor);
}
