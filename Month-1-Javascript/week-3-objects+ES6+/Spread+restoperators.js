//**Copy element of an existing into a new array */
const arr = ["sevrity", "low","medium","high"]

const arr1 = ["let","go","to",...arr,"moscow"]

console.log(arr1);


const num = [1,2,3,4,5,6]

const num1 = [...num]

num1.push(8);

console.log(num1);


function add(a,b,c,d){
    console.log(a+b+c+d)
}

const f = [10,2,3,4]

add(...f);

//**Rest operator  */

function multiply(mut,...arg){
    return arg.map((element) => element*mut);

}

var ari = multiply(2,3,4,5)

console.log(ari);

//**Spread - expand array into separate element
// Rest -  bundle sperate elements into and array */

function add(...number){
    let result = 0

    for(nums of number){
        
        result += nums
    }
    return result;
}

let r = add(2,3,4,5,9)

console.log(`your total is ${r}`);


