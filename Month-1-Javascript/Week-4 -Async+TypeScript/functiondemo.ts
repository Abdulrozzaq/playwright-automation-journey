function sum(x:number, y:number):number{
    return x+y
}

var res = sum(10,30);

console.log(res);


//Ananymous function include parameters and data types 

var greeting= function (){
    console.log(" Welcome to typescript")
}

greeting()

// Arrow function 

var pm = (x:number, y:nmber) : number =>{
    return x*y
}
console.log(pm(20,9));