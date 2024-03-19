import {Libro} from './interfaces/Libro';
export class Biblioteca {
    private libros: Libro[];
    
    constructor(){
        this.libros = [];
    }
    public agregarLibro(libro:Libro){
        this.libros.push(libro);
    }
    public mostrarCatalogo(){
        this.libros.forEach(libro => {
            console.log(libro.obtenerResumen());
        });
    }
}