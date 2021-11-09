import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];
  ultimoHeroeBorrado: string = '';

  borrarHeroe() {
    const heroesBorrados = this.heroes.splice(0, 1);
    // this.heroes.shift(); //Otra Forma
    this.ultimoHeroeBorrado = heroesBorrados[0] || '';
    this.heroesBorrados = [...this.heroesBorrados, ...heroesBorrados];
  }
}
