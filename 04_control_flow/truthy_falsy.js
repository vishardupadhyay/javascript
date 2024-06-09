
const givenUserEmail = "vishard@example.com"

if(givenUserEmail)
    console.log(`User is registered with email ${givenUserEmail}.`)
else
    console.log("User does not have registered email.")

/*
    Falsy Values
        - false
        - 0
        - -0 (negative zero)
        - 0n 
        - "" - empty string
        - null
        - Nan
        - undefined
    
    Truthy Values
        - "0"
        - "false"
        - " "
        - [] 
        - {}
        - function(){}
        - 
*/

// How to check the object is empty

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}

// null coaleascing operator ??

console.log(undefined ?? null ?? 10)