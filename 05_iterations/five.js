const coding = ["js", "python", "C#", "java"]

// coding.forEach( function (item) {
//     item.toLocaleUpperCase()
// })

// coding.forEach((item)=>{
//     console.log(item.toLocaleUpperCase())
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})