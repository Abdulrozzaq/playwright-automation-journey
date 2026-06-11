function vote(age){
    if(age<18){
        return "Too young"
    }
    return "Acesss Granted"
}

let pass = vote(13)
console.log(pass)

//**Parameter and argument  */

function multiply(a,b){
    return a * b;

}

let result = multiply(4,5);

//**a nd b are parameter, 4 and 5 are argument  */

//**Argument Object 
// The argument object contains an array of the arguments used when the function was called (invoked). */

let x = maxAll()

function maxAll(){
    let max = -Infinity;
    for(let i = 0; i <arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}


console.log(maxAll(29,90,98,110,3,4,5,5,6,70,7,9))


let b = sum()

function sum(){
    let sum = 0
    for(let i = 0; i<arguments.length; i++)
        {
            sum +=arguments[i];

    }
    return sum;
    
}

console.log(sum(12,1,34,5,60,70,99,9))

//**Argument can be variables */
let p = 5
let q = 6


function multiply(a,b){
    return a * b;

}

multiply(p,q);



//***Default parameter */

function add(x, y){
    if(y==undefined){
         y=2;
    }
}

add(5)

//**Default parameter value */

function myfunction(c, d =10){
    return C * d 
}

myfunction(9);


//**Function rest parameter */
//**The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:*/

function mult(...args){
    let sum = 0;
    for(arg of args) sum +=arg
    return sum
}
