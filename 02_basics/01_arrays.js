const myArray = [0, 1, 2, 3, 4, 5]

/* 
    Notes

    1. Arrays in javascript are re-sizeable.
    2. Shalow copy shares same references. Changes in copied array reflect in actual array also.
    3. Deep copy do not share same references. Changes in copied array do not reflect in actual array.
    4. shift() method removes the first element from an array and returns it.
    5. unshift() method adds one or more elements to the beginning of an array and returns new length.
    6. slice and splice methods are used to extract a portion of elements from an array.
    7. slice() method does not modify the elements of the original array after the operation.
    8. splice() method modifies the elements of the original array after the operation.

*/

const myHeroes = ["Captain America", "James Barnes", "Thor", "Vision"]
console.log(myHeroes[1]);
myHeroes.push("Iron man")
console.log(myHeroes)
myHeroes.pop()
console.log(myHeroes)
console.log(myHeroes.includes("Hulk"))
console.log(myHeroes.indexOf("Hulk")) // when array does not exists , it will return -1.

console.log(myHeroes.slice(0,2));
console.log(myHeroes); // will print Captain America, James Barnes, Thor, Vision

console.log(myHeroes.splice(0,2));
console.log(myHeroes); // will print Thor, Vision - Because the original array is modified and elements are removed.



