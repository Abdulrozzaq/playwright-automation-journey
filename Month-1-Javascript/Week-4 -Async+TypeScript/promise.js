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
myPromise.then(
  function(value) {myDisplayer(value);},
  function(value) {myDisplayer(value);}
);