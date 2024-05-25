// console.log( 2 > 1) => true
// console.log( 2>= 1) => true
// console.log( 2 < 1) => false
// console.log( 2 == 1) => false
// console.log( 2 != 1) => true

/* Always follow a practice to compare the values of same type to avoid unpredictible result. */
// console.log("2" > 1) => true

/* 
Because the equality check ( == ) and comparison ( <, > , <=, >= )
works differently. Comparison converts null to a number, treats it as 0.
Whereas, equality does not.
*/

// console.log(null > 0) => false
// console.log(null == 0) => false
// console.log(null >= 0) => true

/*
    undefined will always return false , because it is not converted to a number.
    So, all below operations will return false.
*/

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// === , strict check , check the value as well as the type.

// console.log("2" === 2) => false, as the values are same but the types are different.