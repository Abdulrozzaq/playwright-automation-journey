let fruits : string[] = ["Pear", "Apple", "kiwi"]

let fruit1 : (string | number) [] = ["Banana", "Pawpaw", "pineapple", "watermelon", 10, 20]

console.log(fruit1)
console.log(fruits)

console.log(fruit1[0])
console.log(fruit1[1])
console.log(fruit1[2])
console.log(fruit1[3])
console.log(fruit1[4])


//2D array

var myarr : number [][] = [[10,20,40], [90,28,78], [87,72,63]]

console.log(myarr)

//2D array multi dimensional 

var myarr2 : (string | number) [][] = [[100,"xyz"], [200,"abc"],[300,"dydx"]]

console.log(myarr2)

//Access 2D array element 
console.log(myarr[0][0]);
console.log(myarr[0][1]);
console.log(myarr[0][2]);
console.log(myarr[1][0]);
console.log(myarr[1][1]);
console.log(myarr[1][2]);
console.log(myarr[2][0]);
console.log(myarr[2][1]);
console.log(myarr[2][2]);

console.log("Acess 2D array with loop")


for(var i=0; i<myarr.length;i++)
    {
    for(var j = 0; j <myarr[i].length;j++){
        console.log(myarr[i][j])

    }
}






