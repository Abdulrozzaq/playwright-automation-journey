class Car{

    constructor(name,model){
        this.name = name;
        this.model = model
    }

    get show(){
        return this.name + this.model;
    
    }

    set cname(x){

        this.name = x;

    }

}


const cr = new Car("RX", 350)

console.log(cr.show);