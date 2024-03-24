import { Autor } from "../Autor";
import { connection } from "./db/connection";

const TABLE = "autores";

export async function createAutor(nombre: string, apellido: string) {
   try{
     if (nombre === "" || apellido === "") {
        throw new Error("El nombre y el apellido son obligatorios");
      

      }
     const resultSet: any = await connection.query(
            `INSERT INTO ${TABLE} (nombre, apellido) VALUES (?, ?)`,
            [nombre, apellido]
            );
            return resultSet;
        }catch(error){
            throw error;
        }
        finally{
           // connection.end();
        }  
  }
  export async function getAutores() {
    try {
      const resultSet: any = await connection.query(`SELECT * FROM ${TABLE}`);
      return resultSet;
    } catch (error) {
      throw error;
    } finally {
     // connection.end();
    }
  }
  export async function getAutorById(id: number) {

    try {
      const resultSet: any = await connection.query(
        `SELECT * FROM ${TABLE} WHERE id_autor = ?`,
        [id]
      );
     
      
      return resultSet;
    } catch (error) {
      throw error;
    } finally {
      

    }
  }
    export async function updateAutor(id: number, nombre: string, apellido: string) {
       
        try {
        
        if (nombre === "" || apellido === "") {
            throw new Error("El nombre y el apellido son obligatorios");
        }
        const resultSet: any = await connection.query(
            `UPDATE ${TABLE} SET nombre = ?, apellido = ? WHERE id_autor = ?`,
            [nombre, apellido, id]
        );
        return resultSet;
        } catch (error) {
        throw error;
        } finally {
      //  connection.end();
        }
    }
    export async function deleteAutor(id: number) {
       
        try {
        
        
        
        await connection.query(
            `DELETE FROM ${TABLE} WHERE id_autor = ?`,
            [id]
        );
       
        } catch (error) {
        throw error;
        } finally {
 
        }
    }

    

