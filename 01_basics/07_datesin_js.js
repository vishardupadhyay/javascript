let myDate = new Date()

console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) // object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString()) // Tue Jan 23 2024 . Becuase Month has indexes starting from 0.

let newDate = new Date("2024-01-14")
console.log(newDate.toLocaleDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp) // will display current time in miliseconds.
console.log(newDate.getTime())

console.log(Math.floor(Date.now() / 1000)) // to convert current time to seconds.

let newDate1 = new Date()
console.log(newDate1.getMonth() + 1) // Because index of months starts from 0.
console.log(newDate1.getDay())

console.log(newDate1.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC"
}))