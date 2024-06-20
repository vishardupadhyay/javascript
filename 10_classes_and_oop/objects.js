function multiplyByFive(input){
    return input * 5;
}

multiplyByFive.power = 10

// console.log(multiplyByFive(5))
// console.log(multiplyByFive.power)
// console.log(multiplyByFive.prototype)


function createUser(userName, score){
    this.userName = userName,
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}.`)
}

const chai = new createUser("chai", 10)
const tea = new createUser("tea", 100)

chai.printMe()

/*
    Here's what happens behind the scenes when the new keyword is used : 

    1. A new object is created. The new keyword initiates the creation of a new javascript object.
    2. A prototype is linked. The newly created object gets linked to the prototype property 
        of the constructor function. This means that it has access to properties and methods defined
        on the constructor's prototype.
    3. The constructor is called. The constructor function is called with the specified arguments and this
        is bound to the newly created object. If no explicit return value is specified from the constructor.
        Javascript assumes this (newly created object) to be intended return value.
    4. The new object is returned. After the constructor function has been called, if is doesn't return a
        non-primitive value (object, array, function etc.), the newly created object is returned.
*/