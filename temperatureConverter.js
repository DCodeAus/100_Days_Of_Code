//grabs an input value of Kelvin, then converts to other temperature values such as celsius
//Constant value of kelvin
const kelvin=0;
// get celsius value
var celsius=(kelvin)-273;
//get fahrenheit value
var fahrenheit=celsius *(9/5)+32;
//newton value
var newton=celsius*(33/100);

console.log(kelvin)
console.log(celsius)
console.log(fahrenheit)
console.log(newton)
console.log('The temperature is ' + Math.floor(fahrenheit))