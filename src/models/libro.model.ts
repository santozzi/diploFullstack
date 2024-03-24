import { Autor } from '../Autor';
import {connection} from './db/connection';

const TABLE = 'libros';

export async function getBooks(){
    try {
      


        return await connection.query(`SELECT * FROM ${TABLE} INNER JOIN autores ON libros.autor = autores.id_autor`);
    } catch (error) {
        console.log(error);
    }
    
}

export async function getBookById(id:number){
    try {
        return await connection.query(`SELECT * FROM ${TABLE} WHERE id = ?`, [id]);
    } catch (error) {
        console.log(error);
    }  
}

export async function createBook(title:string, author:Autor){
    try {
        return await connection.query(`INSERT INTO ${TABLE} (titulo, autor) VALUES (?, ?)`, [title, author]);
    } catch (error) {
        console.log(error);
    }
} 