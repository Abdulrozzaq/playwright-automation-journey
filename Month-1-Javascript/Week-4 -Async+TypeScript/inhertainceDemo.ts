class Employee{

    esal:number;
    eexp:number;
    etitle:string;


    constructor(sal:number, exp : number, title:string){

        this.esal=sal;
        this.eexp=exp;
        this.etitle=title;
    }
    
    display():string{
      return `${this.esal}$is the take home for ${this.eexp} YOE in ${this.etitle}`
    }
    
}


class Main extends Employee{

    eunit:string;
    ecar : string;


constructor(sal:number, exp:number, title:string, car:string,unit:string){
    super(exp, sal,title);
         this.ecar = car;
         this.eunit = unit;

}

dlay(): string{
    
    return `${this.ecar} is in ${this.eunit}`
}



}

var m = new Main(4, 5000, "Test lead", "Lexus", "Business unit")
console.log(m.dlay());
console.log(m.display())