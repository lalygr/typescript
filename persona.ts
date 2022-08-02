class Persona{
    idpersona:number=1;
    nombre:string="";
    paterno:string="";
    materno:string="";

    //constructor
    constructor(nombre_:string=""){
        this.nombre=nombre_;
    }
    getNombre(){
        return this.nombre;
    }
}