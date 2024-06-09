
if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// // will throw an error because of inaccessibility
// console.log(a) 
// // will throw an error because of inaccessibility
// console.log(b)
// // will print the value assigned, which is wrong. Variables declared inside the scope must not be accessible outside.
// // That's why using var is not recommended in javascript due to accessibility concerns. 
// console.log(c)

function parent(){
    const userName = "Vishard"

    function child(){
        const website = "YouTube"
        console.log(userName) // will print Vishard
    }

    //console.log(website) // Will throw an error as website is not defined (Because local variable to child function)
    child() // calling child function

}

//parent()

console.log(addOne(5)) // this will print the value 6 in the console.

function addOne(givenNumber) {
    return givenNumber + 1;
}

console.log(addTwo(5)) // this will throw an error (Cannot access 'addTwo' before initialization) due to hoisting.

const addTwo = function(givenNumber){
    return givenNumber + 1;
}
