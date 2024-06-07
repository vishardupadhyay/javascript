// function definition
// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    return num1 + num2
}

// function calling
let result = addTwoNumbers(1, 2)
// undefined with fn definition 1, will print the sum of num1 + num2 with second method definition
//console.log("Result is: " , result) 

// a function can have default value passed in like username = "Other user"
// If no argument is passed to the function then function will consider username as Other user (default value)

function loggedInUser(username) {

    if(!username){
        return "Invalid username"
    }

    return `${username} is logged in to the system.`
}

//console.log(loggedInUser("Vishard"))

function calculateCartPrice(...items){
    return items // will return an array.
}

//console.log(calculateCartPrice(100, 300, 500, 1000))

const user = {
    name: "Vishard",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is: ${anyObject.name} and price is ${anyObject.price}`);
}

handleObject(user)