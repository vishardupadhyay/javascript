const myName = "Vishard"
const myAge = 27;

/* The below string concatenation is an outdated way for
concatenating the string.
 */
// console.log("My name is " + myName + " and my age is:" + myAge)

// use string interpolation to concatenate the strings.

console.log(`Hello my name is ${myName} and my age is ${myAge}.`);

/* The below technique to declare the string allow using multiple methods such as charAt, length etc. */
const userName = new String("vupadhya") // another way to declaring the string.

console.log(userName.charAt(2)) // will print p
console.log(userName.indexOf(y)) // will print index position of character y