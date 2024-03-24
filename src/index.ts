import { LibroImpreso } from "./LibroImpreso";
import { Libro } from "./interfaces/Libro";
import { Autor } from "./Autor";
import { Persona } from "./interfaces/Persona";
import { Biblioteca } from "./Biblioteca";
import { Perro} from "./Perro";



import { createAutor,  getAutores, getAutorById, updateAutor, deleteAutor} from "./services/autor.service";
import { getBooks } from "./models/libro.model";

let autor1:Persona = new Autor('J.R.R.', 'Tolkien');
let autor2:Persona = new Autor('Isaac', 'Asimov');
let autor3:Persona = new Autor('George R.R.', 'Martin');


let libro1:Libro = new LibroImpreso('El señor de los anillos', (autor1 as Autor));
let libro2:Libro = new LibroImpreso('Fundación', (autor2 as Autor));
let libro3:Libro = new LibroImpreso('Juego de tronos',(autor3 as Autor));

    


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
//getBooks().then((result:any) => log(result[0]));
/* createAutor("Natalia","Solis")
    .then((result:Autor) => log(result.toString()))
    .catch((error:Error) => log(error.message)); */

/* getAutores().then((result:Autor[]) => {
    result.forEach((autor:Autor) => {
        log(autor.toString());
    });
}).catch((error:Error) => log(error.message)); */
//getAutorById(10).then((result:Autor) => log(result.toString()))
//updateAutor(11,"Natalia","Solis").then((result:Autor) => log(result.toString()))

//deleteAutor(7).then((result:Autor) => console.log(result.toString())).catch(error=>console.log(error));
getBooks().then((result:any) => console.log(result[0]));






