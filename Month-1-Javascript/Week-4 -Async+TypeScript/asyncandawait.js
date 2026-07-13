// Async/Await = Async = makes a function return a promise
// Await = makes an async function wait for a promise

function walkdog(){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        const ifwalk = true;
        if(ifwalk){
            resolve("Yo are walking the dog today")

        }
        else{
            reject("You're not walking the dog today")
        }

    }, 1500);

    });
}

function cleankitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const clean = true;
        if(clean){
            resolve("You are cleaning the kitchen every morning")
        }else{
            reject("You dont have to clean the kitchen every morning")
        }

        },1500);

    });
}

function washplate(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const wash  = true;

            if (wash) {
                resolve("You are washing every weekend")
            }
            else{
                reject("You not washing this weekend")
            }

        },1500);

    });
}

async function dochores(){
    try{

     const walkdogResult = await walkdog()
    console.log(walkdogResult)

    const cleankitchenResult = await cleankitchen()
    console.log(cleankitchenResult)

    const washplateResult = await washplate()
    console.log(washplateResult)

    console.log("That's all for this weeks chores!")

    }
    catch(error){
        
    }





}


dochores()