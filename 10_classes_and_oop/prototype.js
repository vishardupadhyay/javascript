// let myName = "vishard     "

// console.log(myName.truelength)

let myHeroes = ["thor", "captain america"]

let heroPower = {
    thor: "hammer",
    captainAmerica: "shield",
    getcaptainpower: function() {
        console.log(`Captain's power is ${this.captainAmerica}`)
    }
}

// Inheritance

const User = {
    name: 'teachor'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // prototypal inheritance
}

Teacher.__proto__ = User // prototypal inheritance

// modern syntx for same above code

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport will get all the properties of Teacher
// TeachingSupport will act as sub-type and Teacher is base type.


let anotherUserName = 'vishardupadhyay    '

String.prototype.trueLength = function(){
    console.log(`${this} true length is ${this.trim().length}`)
}

console.log(anotherUserName.trueLength())

/*
    1. When a power is given to any super-types, it is automatically available for all subtypes. But reverse
        is not true.

    Example : 

    Object.prototype.addPower = function() {
        console.log("Object got a new power now") // power means a property.
    }

    and when this is assigned to the base type i.e. Object
    it is automatically accessible to the sub-types like array, string, function, objects
    because they all are objects to and their base type is object.


    Reverse :

    Array.prototype.addPower = function() {
        console.log("Array got a new power now")
    }

    when this is assigned to Array type , it is only accessible to arrays only.
    and no other types (functions, string) should get this power other than the array neither the Object.
*/