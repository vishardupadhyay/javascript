// const user = {
//     userName: "vishard",
//     loginCount: 8,
//     isSignedIn: true,

//     getUserDetails: () => {
//         return this.userName
//     }
// }

// console.log(user.getUserDetails())

// Note : The above code will not print the value of userName 
// Why?
// Because, arrow functions do not have their own this context.
// the this keyword used inside arrow function will not refer the user object.

const user = {
    userName: "vishard",
    loginCount: 8,
    isSignedIn: true,

    getUserDetails: function() {
        return this.userName
    }
}

//console.log(user.getUserDetails())

function User(userName, loginCount, isLoggedIn){
    this.userName = userName,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    this.greetings = function() {
        console.log(`Welcome ${this.userName}.`)
    }
    return this
}

const userOne = new User("vishard", 12, true)
const userTwo = new User("chaiaurcode", 11, false)

//console.log(userOne)