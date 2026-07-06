function calculate(x, y, ...operation){
    return operation.map(operation=>operation(x,y));
}

function add(a, b){
    return a + b;
}

function sub(w,y){
    return w/y;
}

function mut(o,p){
    return o*p;
}

let result = calculate(5, 3, add, mut, sub);

console.log(result);


setTimeout(add,1000);