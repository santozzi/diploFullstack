import { LibroImpreso } from "./LibroImpreso";
import { Libro } from "./interfaces/Libro";
import { Autor } from "./Autor";
import { Persona } from "./interfaces/Persona";
import { Biblioteca } from "./Biblioteca";

let autor1:Persona = new Autor('J.R.R.', 'Tolkien');
let autor2:Persona = new Autor('Isaac', 'Asimov');
let autor3:Persona = new Autor('George R.R.', 'Martin');

let libro1:Libro = new LibroImpreso('El señor de los anillos', autor1);
let libro2:Libro = new LibroImpreso('Fundación', autor2);
let libro3:Libro = new LibroImpreso('Juego de tronos', autor3);

    


let biblioteca:Biblioteca = new Biblioteca();
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
biblioteca.agregarLibro(
    new LibroImpreso(
        'Harry Potter y la Piedra Filosofal', 
         new Autor(
            'J.K.', 
            'Rowling')
            ));
console.log('Catálogo de la biblioteca:');
console.log('---------------------------');
biblioteca.mostrarCatalogo();
