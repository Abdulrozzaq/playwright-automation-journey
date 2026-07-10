let myPromise = new Promise(function(resolve, reject) {

// Code that may take some time

  let success = true;
  if (success) {
    resolve("Done");
  } else {
    reject("Failed");
  }
});

// Use the Promise
//Promise.then(
  //nction(value) {myDisplayer(value);},
  //nction(value) {myDisplayer(value);}
//



const p = new Promise((resolve,reject) =>{
    let a = 1+1 

    if(a==2){
        resolve('success')
    }else{
        reject('failed')
    }
})

p.then((message)=>{
    console.log('this is the reward' + message)

}).catch((message)=>{
    console.log('tis is error for' + message)
})