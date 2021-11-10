import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 7500 }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() { }

  agregarNuevoPersonaje(nuevoPersonaje: Personaje): void {
    this._personajes.push(nuevoPersonaje)
    console.log("Personajes actualizados: ", this._personajes);
  }
}
