const myName = "Vishard"
const myAge = 27;

/* The below string concatenation is an outdated way for
concatenating the string.
 */
// console.log("My name is " + myName + " and my age is:" + myAge)

// use string interpolation to concatenate the strings.

console.log(`Hello my name is ${myName} and my age is ${myAge}.`);

/* The below technique to declare the string allow using multiple methods such as charAt, length etc. */
const userName = new String("vupad-hya") // another way to declaring the string.

console.log(userName.charAt(2)) // will print p
console.log(userName.indexOf('y')) // will print index position of character - 6

/* Note - the characters at end index are not included as a part of string in both substring and slice methods. */
const newString = userName.substring(0, 4) // will extract only first four character of the string userName, only acts on positive indexes.
const anotherString = userName.slice(0, 4) // will also extract only first four characters of the string, but also allows negative indexs.

/*
    Points to remember
    1. When negative indexs are supplied to substring method, it is ignored and replaced with 0.
    2. If startIndex is greater than endIndex. then substring will swap both the indexes with each other but slice will not.
    3. Positive index will start from 0 whereas negative will start from -1 at the last.
    4. 
*/
console.log(userName.split('-')); // splits the string into array of character based on the splitter.