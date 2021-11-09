import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
