//forecast in kelvin
const kelvin = 293;
//convert to celsius
const celsius = kelvin - 273;
//convert to fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round to whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);