//**Function definition */

function multiply(a,b){
    return a * b;
}

//**Function expression */

const multiply = function(a,b){
    return a * b;
}

//**Hositing */

//**Function declarations are "hoisted" to the top of their scope. */
let sum = add(2, 3); // Will work

function add(a, b) {return a + b;}

//**Function expressions are not hoisted in the same way as function declarations. */

let sum = add(2, 3); //  Will generate error

const add = function (a, b) {return a + b;}