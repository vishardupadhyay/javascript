
/*
    Notes 
    1. Use Map when you want to transform the elements.
    2. Use filter when you want to select the element based on some condition.
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const filteredNumbers = myNumbers.map( (num) => num + 10)

const filteredNumbers = myNumbers
                                .map( (num) => num * 10)
                                .map((num) => num + 1)
                                .filter((num) => num > 40)

console.log(filteredNumbers)