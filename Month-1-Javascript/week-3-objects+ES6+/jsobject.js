let person = {
    first_name: "John",
    last_name: "Jones",
    age: 34,
    weight: 50

};

//**Dot Notation */
console.log(person.age);

person.height = 43;

console.log(person.height);


delete person.age

console.log(person.age)

let employee = {
    name: "ben",
    job : "Engineer",
    salary: 50000,
    bonus : function(){
        return((this.salary/100)*10)
    }
};

console.log(employee.bonus());

//**Bracket Notation */

employee["race"] = "black"

console.log(employee["race"]);

//**Destructuring */

let {name,job} = employee;

for(x in employee){

    console.log(x  +  " "  + " " + " " + employee[x]);
}

//**Template literals */

let pro = "John"

console.log(`What is  ${pro} ${3+5} 
doing in the car? `)