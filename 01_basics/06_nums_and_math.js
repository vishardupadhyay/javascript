const sampleNumber = 400

//console.log(sampleNumber)

const secondNumber = new Number(500)

//console.log(secondNumber)

//console.log(secondNumber.toString());
/*
    Both are the ways to declare a number in javascript.
    But, if a number is declared using new Number syntax, it is treated as object
    and opens the doors to use inbuilt functions available under Number class.
    Functions - toString(), toFixed() ,valueOf() etc.
*/

const otherNumber = 23.5453
//console.log(otherNumber.toPrecision(3)); // works on precision based on the numbers provided in argument
// it gives exponanatioal values sometimes.

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math.abs(-5))
// console.log(Math.round(4.6)) // 5
// console.log(Math.ceil(4.2)) // 4
// console.log(Math.floor(4.8)) // 5
// console.log(Math.min(4,2,5,1,0)) // minimum value
// console.log(Math.max(3,5,24,463,3)) // maximum value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)