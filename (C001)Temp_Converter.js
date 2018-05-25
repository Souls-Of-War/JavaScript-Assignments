//Converts either Celsius to Fahrenheit or Fahrenheit to Celsius

function cToF(celsius) {
  // this is celsius to Fahrenheit
  var c = celsius; //defining celsius
  var f = (c * 1.8) + 32; //the formula to conver celsius to fahrenheit
  console.log (c + "°C is " + f + "°F");  //printing the answer
}
function fToC(fahrenheit) {
  // this is Fahrenheit to Celsius
  var F = fahrenheit; //defining fahrenheit
  var C = (5/9) * (F - 32); //the formula to convert fahrenheit to celsius
  console.log (F + "°F is " + C + "°C"); //printing the answer
}

cToF(60);
fToC(45);
