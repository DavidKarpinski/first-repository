class Error {
  public static error:string = "Error: something is wrong!";
  
  public static warning() {
    alert(error);
    console.log(error);
    document.write(error);
  }
}



window.onload() = () => {
  if (2 > 1) {
    function exibition:void() {
      const message:string = "Hello World!";
      console.log(message);
      alert(message);
      document.write(message);
    }
    exibition();
  } else {
    var bloomer:Error = new Error();
    bloomer.warning();
  }
}
