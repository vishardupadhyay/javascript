
if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// will throw an error because of inaccessibility
console.log(a) 
// will throw an error because of inaccessibility
console.log(b)
// will print the value assigned, which is wrong. Variables declared inside the scope must not be accessible outside.
// That's why using var is not recommended in javascript due to accessibility concerns. 
console.log(c)
