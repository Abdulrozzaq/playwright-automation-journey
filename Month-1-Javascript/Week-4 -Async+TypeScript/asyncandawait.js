// Create an async function
async function hello() {
  return "Hello World!";
}

// Call the async function
hello().then(function(value) {
  myDisplayer(value);
});