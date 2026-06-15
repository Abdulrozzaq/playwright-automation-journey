let fruit = ["apple","pear","pineapple", "guava"]
let car = new Array("opel", "BMW", "Porshe","volvo")

console.log(fruit);
console.log (car);

for(me of fruit){
    console.log(me);
}

for(let i = 0; i < car.length; i++){
    console.log(car[i]);
}

//**Array Method */

const num = [12,5,90,50,69,39]
const name = ["Ben","Paul", "mary", "luke", "shaw"]

console.log(num.sort());

console.log(name.pop());

name.slice(1);

console.log(name);

console.log(name.shift());

console.log(name.toString());


const result = fruit.filter((na) => (na.length > 5));

console.log(result);

function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44]

console.log(filtered.filter(isBigEnough));

const found = num.find((gm) => (gm > 5));

console.log(found);

const res = fruit.forEach((me) => console.log(me));

const reduced = num.reduce((sum,curr) => sum + curr, 0);

console.log(reduced);

const mapped = num.map((x) => (x * 2));

console.log(mapped);

const net = (element) => element % 2 == 0;


console.log(num.some(net));