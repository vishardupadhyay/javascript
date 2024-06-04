// singleton - Object.create

// object literals

/*
    Notes : 
    1. While accessing the object values it is recommended to access using square bracket notations.
    2. To declare and use a Symbol inside an object use square brackets [mySymbol] 
       and use square bracket while accesseing console.log(myObj[mySymbol]).
    3. Use Object.freeze(obj) to make the object immutable. Even if you change the values after this
        there will be no error but the changes will not propagate.
    4. 
*/

const mySymbol = Symbol()

const JsUser = {
    name: "Vishard",
    age: 27,
    location: "Mandi",
    email: "vishard@example.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySymbol] : "Sample symbol"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

//JsUser.email = "vishard@examplemail.com"
//Object.freeze(JsUser)

//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello from function.")
}

JsUser.greeting2 = function(){
    console.log(`Hello from function. ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
