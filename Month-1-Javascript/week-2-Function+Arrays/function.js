function vote(age){
    if(age<18){
        return "Too young"
    }
    return "Acesss Granted"
}

let pass = vote(13)
console.log(pass)