function doSomething(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function saySomething() {}
function failureCallback() {
  console.log("Unexpect error");
}

// doSomething(200)
//   .then(saySomething)
//   .catch(failureCallback);
