    class Gato extends Animal{
    tamaniobigotes:string="";

    constructor(persona_:object,nombre_:string,tamaniobigotes_:string){
        super(persona_,nombre_);
        this.tamaniobigotes = tamaniobigotes_;
    }

    getTamanioBigotes(){
        return this.tamaniobigotes;
    }
    getNombre(){
        return  "polimorfismo "  + this.nombre;
    }
}