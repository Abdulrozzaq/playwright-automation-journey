/**Print 1 to 10  using the while loop*/

let i =1

 while(i<=10){
    console.log(i)
    i++;
 }

 //**Print even number from 2 to 20 */

 let e = 2

 while(e<=20){
    console.log(e)
    e+=2;
 }

 //**Using do while staement */

 let b = 10

 do{
    console.log(b)
    b--;
 }while(b>=0)


    //** Using for loop statement */

    for(p=1; p<=10; p++){
        console.log(p)
    }

    ///**Jumping statement */

    for(j=2; j<=12; j+=1){
        if(j==9){
            break;
        }
        console.log(j)

    }
    
    for(k=1; k<=10; k++){
        if(k==3){
            continue;
        }
        console.log("number" + k)
    }
