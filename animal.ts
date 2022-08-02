class Animal{
    idanimal:number=0;
    nombre:string="";
    persona:Object=Persona;
    constructor(persona_:object,nombre_:string){
        this.persona = persona_;
        this.nombre=nombre_;
    }
    getNombre(){
        return this.nombre=this.nombre;
    }

}