// ES 6 

// class User {
//     constructor(username, email, password){
//         this.username = username,
//         this.email = email,
//         this.password = password
//     }

//     EncryptThePassword(){
//         return `${this.password}abc`
//     }

//     CapitalizeTheUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.EncryptThePassword());
// console.log(chai.CapitalizeTheUserName());

// behind the scenes

function User(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
}

User.prototype.EncryptThePassword = function(){
    return `${this.password}abc`
}

User.prototype.CapitalizeTheUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@chaiwala.com", "chaiwala123")

console.log(tea.CapitalizeTheUserName())
console.log(tea.EncryptThePassword())