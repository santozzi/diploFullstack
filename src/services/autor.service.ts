import { log } from "console";
import { Autor } from "../Autor";
import { 
        createAutor as createAutorModel,
        getAutores as getAutoresModel,
        getAutorById as getAutorByIdModel,
        updateAutor as updateAutorModel,
        deleteAutor as deleteAutorModel
    } from "../models/autor.model";


export function createAutor(nombre: string, apellido: string): Promise<Autor> {
  return new Promise(async (resolve, reject) => {
    try {
      const resultSet: any = await createAutorModel(nombre, apellido);
      const id = resultSet[0].insertId;
      let autor: Autor = new Autor(nombre, apellido);
      autor.setId(id);
      resolve(autor);
    } catch (error) {
      reject(error);
    }
  });
}

export function getAutores(): Promise<Autor[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const resultSet: any = await getAutoresModel();
      const autores: Autor[] = resultSet[0].map((autor: any) => {
        let autorObj: Autor = new Autor(autor.nombre, autor.apellido);
        autorObj.setId(autor.id_autor);
        
        
        return autorObj;
      });

      resolve(autores);
    } catch (error) {
      reject(error);
    }
  });
}
export function getAutorById(id: number): Promise<Autor> {
    return new Promise(async (resolve, reject) => {
        try {
        const resultSet: any = await getAutorByIdModel(id);
        const autor: any = resultSet[0][0];
        let autorObj: Autor = new Autor(autor.nombre, autor.apellido);
        autorObj.setId(autor.id_autor);
        resolve(autorObj);
        } catch (error) {
        reject(error);
        }
    });
    }

export function updateAutor(id: number, nombre: string, apellido: string): Promise<Autor> {
    return new Promise(async (resolve, reject) => {
    try {
        const resultSet: any = await updateAutorModel(id, nombre, apellido);
       
        
        let autor: Autor = new Autor(nombre, apellido);
        autor.setId(id);
        resolve(autor);
    } catch (error) {
        reject(error);
    }
    });
    }
export function deleteAutor(id: number): Promise<Autor> {
    return new Promise(async (resolve, reject) => {
    try {
        const autor:Autor = await getAutorById(id);
        let newAutor = new Autor(autor.getNombre(), autor.getApellido())
        newAutor.setId(autor.getId())
        await deleteAutorModel(id);
        
      
        resolve(newAutor);
    } catch (error) {
        reject(error);
    }
    });
    }





