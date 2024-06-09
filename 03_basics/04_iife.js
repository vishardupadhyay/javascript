// Immediately Invoked Function Expressions (IIFE)

/*
    Notes :
    There are two types of IIFE'S
    1. Named IIFE - IIFE declared with function keyword.
    2. Unnamed/ Simple IIFE - with arrow function syntax.


    1. IIFE (Immediately Invoked Function Expression)
    2. A function is executed as soon as it is defined.
    3. It is majorly use to avoid global naming conflicts.
    4. Can be used
        - Configuration files
        - Library Code
        - 
    5. Have a practice to add semi-colon (;) after each IIFE ends
        why?
        - Because, you will define a function and execute it
            but the compiler will not know where exaclty to stop it.
        - If semi-colon(;) is not applied at the end.
            An error will be thrown as ... not a function.
*/

// named iife
(function iife(){
    console.log("This is an example of immediately invoked function expression.")
})();

// arrow function - simple iife

( (name) => {
    console.log(`${name}, This is an example of immediately invoked function with arrow syntax`)
})("Vishard");

