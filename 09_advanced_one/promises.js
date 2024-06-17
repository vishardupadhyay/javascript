// let promiseOne = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, cryptography, network calls

//     setTimeout(() => {
//         console.log("Async task has been completed.")
//         resolve()
//     }, 1000)
// })

// promiseOne
// .then(() => {
//     console.log("Promise consumed.")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task two")
//         resolve()
//     }, 1000)
// }).then(()=> {
//     console.log("Async task two resolved.");
// })

// let promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ userName : "Chai", email : "Chai@example.com"})
//     },1000)
// })

// promiseThree.then((user) => {
//     console.log(user)
// })

// let promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true

//         if(!error){
//             resolve({ userName : "Vishard", password : 123})
//         }
//         else{
//             reject("ERROR: Something went wrong.")
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user)
//     return user.userName
// })
// .then((userName) => {
//     console.log(userName)
// })
// .catch((error) => {
//     console.log(error)
// })
// .finally(() => {
//     console.log("Finally executed.")
// })

// let promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
        
//         if(!error){
//             resolve( { userName: "javascript", password: "123"})
//         }
//         else{
//             reject("ERROR: JS went wrong.")
//         }
//     }, 1000)
// })

// let resp = async () => {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// resp()

// const fetchAllUsers = async () => {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users')

//         let jsonData = await response.json()

//         console.log(jsonData)
//     } catch (error) {
//         console.log(error)
//     }
// }

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
console.log(error)
})

//fetchAllUsers()