import { Persona } from "./interfaces/Persona";




export class Autor extends Persona {


  //si id es 0 entonces es un autor nuevo

  constructor(nombre: string, apellido: string) {
    super(nombre, apellido);
  
  }
  

  toString(): string {
    return `${this.id} ${this.nombre} ${this.apellido}`;
  }
  

}