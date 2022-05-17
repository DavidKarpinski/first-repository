const message = "Hello World!";
const error = "ERROR: Something is wrong";

function exibition(message) {
  alert(message);
  console.log(message);
  document.write(message);
}

if (!2 < 1) {
  exibition(message);
} else {
  exibition(error);
}
