class Animal{
 
    constructor(type,price){

        this.type = type;
        this.price = price

    }

    display(){
        console.log(this.price,this.type)
    }


}

class Place extends Animal{

    constructor(type, price, color){
        super(type, price);
        this.color = color;
    }

    show(){
        
        return  this.type + "animal," + "wortth " + this.price + " in the " + this.color;
    }
}

const d = new Place("wild", 300, "brown")

console.log(d.show());