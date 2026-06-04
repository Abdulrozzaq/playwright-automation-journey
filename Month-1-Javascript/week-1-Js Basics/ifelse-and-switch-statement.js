let person_age=13;

if (person_age >= 18 )
    {
    console.log("Eligbile to vote")
}

else
    {
    console.log("Ineligbile to vote")
}



//**Find out even number or odd number */


let x = 9

if (x%2==0){
    console.log("x is an even number ")
}

else{
    console.log("x is an odd number")

}

//** Find the largest number  */

let a =10, b=20, c=30

if(a>b && a>c){

    console.log("a is the largest number")

}

else if (b>a && b>c){
    console.log("b is the largest number")
}

else{
    console.log("c is the largest number")
}

//**Switch Statement */
 let weekno = 1

 switch (weekno){

    case 1 : console.log("Sunday");break;
    case 2 : console.log("Monday");break;
    case 3 : console.log("Tuesday");break;
    case 4 : console.log("Wednesday");break;
    case 5 : console.log("Thursday");break;
    case 6 : console.log("Friday");break;
    case 7 : console.log("Saturday");break;
    deafault : console.log("Invalid format");
 }