const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]

/* 
    Notes

    1. push method below will not push all elements at the end of array marvelHeroes.
    2. But, it will push all the element as a single elemenet as array 
    3. The length of the array marvelHeroes will be 4 not 6.
    4. The solution is to use concat method or spread the arrays into individual elements using [..., ...]
    5. Spreading of the array elements is considered best because it acts on multiple arrays
        whereas concat can acts upon 2 arrays at a time.
    6. When there is a case given nested array i.e. array inside the array
        use flat() to spread the elements of the array into a single array.
    7. Array.from() and Array.of() are two ways to create array out of multiple values.
        Array.from() uses a lambda function to add custom logic.
        Array.of() creates an array out of multiple values.
*/
// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes)
// console.log(marvelHeroes.length)

// let allHeroesCombined =  marvelHeroes.concat(dcHeroes)

// console.log(allHeroesCombined)

// let allHeroesCombined2 = [...marvelHeroes, ...dcHeroes]
// console.log(allHeroesCombined2)

let anotherArray = [1, 2, 4, [4, 5, 6], 7, [6, 7, [4, 5]]]
let flattenedArray  = anotherArray.flat(Infinity)
console.log(flattenedArray)

console.log(Array.isArray("Vishard")) // false
console.log(Array.from("Vishard")) // 'V', 'i', 's', 'h', 'a', 'r', 'd'

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))