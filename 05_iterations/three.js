// array specific loops.

// const newArray = [1, 2, 3, 4, 5]

// for (const element of newArray) {
//     console.log(element)
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(greet)
// }

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")

//console.log(map)
// Object destructing with [] braces.
for (const [key] of map) {
    console.log(key)
}


