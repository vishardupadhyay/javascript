
/* 
    Notes
    1. this keyword is used to refer to the current context.
    2. current context refers to the values.
    3. While logging the userName with this prefix,
        the userName is no longer hard-coded which means that it will now be referred to current context
        instead of referring the initial value only [which is Vishard]
        the value will be referred as per the program.
    4. When object.userName is changed [From Vishard to Captain]
        the program will refer the userName as Captain now not Vishard , because updated in current context.
    5. The global context will be empty object in node environment. {}
    6. But, the global context is window object in browsers.
        Reason?
        The javascript was used to run the browser engine before time, there were no standalone engines to run 
        javascript other than in browser.
        But, there are alot of engines available to run javascript locally now
        So, that's why console.log(this) 
        - will print empty object in node environment
        - will print window object in browser
    7. The traditional and arrow function has some key differences.
        1. Syntax is bit different
        2. this binding 
            1. Normal function refers to current object when console.log(this)
            2. Arrow function refers to global object when console.log(this)
        3. Argument object
            1. Normal function has its own arguments object, array like object containing all the arguments
                passed to the function.
                - console.log(arguments)

            2. Arrow function does not has its own arguments object
                - the rest parameters are used in the arrow functions
                - console.log(arguments) , will throw error
                .- console.log(...args) is used
        4. Constructors
            - Normal functions can be used as constructor to create new objects with new
            - Arrow functions cannot be used as constructor to create new object.
*/

const userInformation = {
    userName: "Vishard",
    userId: "vupadhya",
    welcomeMessage: function(){
        console.log(`Hello ${this.userName}, welcome to our website.`)
    }
}

// console.log(userInformation.welcomeMessage())

// userInformation.userName = "Captain" // changing the username

//console.log(userInformation.welcomeMessage())

//console.log(this) // will print empty object.

// How to declare arrow functions

const arrowFunction = () => {
    let userName = "Vishard"
    console.log(`Hello ${userName}`)
    console.log(this)
}

// implicit return

const arrowFunction2 = () => console.log("Second arrow function")

//arrowFunction()
//arrowFunction2()