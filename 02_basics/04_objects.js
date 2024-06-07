// Singleton objects

// object chaining.

/*
    Notes :

    1. Use speread operators to combine the objects like arrays [...obj1, ...obj2]
    2. To make sure if the property exists in the object
        Make use of obj.hasOwnProperty('propertyName') method - this will return a boolean value
        and can be safe before accessing the value because value may not exist.
    3. The objects can be destructured by using 2 techniques
        1. let value = obj1.Key 
        2. let value = {key: you can add specific name also} = course // this syntax is preferred.
*/
const regularUser = {
    email: "some@example.com",
    fullName: {
        userFullName:{
            firstName: "vishard",
            lastName: "upadhyay"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {
    ...obj1,
     ...obj2
    }
console.log(obj3)

const course = {
    name: "javascipt",
    price: "999",
    instructor: "hitesh"
}

// object de-structuring.
const {name: courseName, price, instructor} = course // or const {instructor: courseInstructor} = course

// Multiple values can also be extracted from the object using comma's
// e.g. const {instructor, name, price} = course

console.log(`The name is ${name}, price is ${price} and the instructor is ${instructor}`) // or console.log(courseInstructor)