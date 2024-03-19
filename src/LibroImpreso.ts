import { Libro } from "./interfaces/Libro";
import { Autor } from "./Autor";
export class LibroImpreso implements Libro {
  constructor(public titulo: string, public autor: Autor) {}
  obtenerResumen(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}`;
  }
}