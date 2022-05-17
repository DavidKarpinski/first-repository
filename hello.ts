const message:string = `Hello World!`;

function exibition:void(message:string) {
  console.log(message);
  alert(message);
  document.write(message);
}

if (2 > 1) {
  exibition(message);
}
