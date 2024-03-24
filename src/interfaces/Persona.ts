export abstract class Persona{
   protected  id:number;
   protected  nombre: string;
   protected  apellido: string;

   constructor(nombre: string, apellido: string) {
 
      this.id = 0;
      this.nombre = nombre;
      this.apellido = apellido;
    }

   setId(id: number): void {

      this.id = id;
    }
    getNombre(): string {
      return this.nombre;
    }
    getApellido(): string {
      return this.apellido;
    }
    getId(): number {
      return this.id;
    }
    

}