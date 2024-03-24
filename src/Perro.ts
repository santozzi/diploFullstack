function Decorador(target:Function){
    target.prototype.Saludar = function(){
        console.log("Hola, soy un perro");
    }
}
@Decorador
export class Perro {
    constructor(){}
}
