
const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "Swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} short for ${myObject[key]}`)
}

const programming = ["js", "ruby", "python", "c#"]

for (const key in programming) {
    console.log(`Value at position ${key} is ${programming[key]}`)
}