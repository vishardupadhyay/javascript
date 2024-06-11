
const myNums = [ 1, 2, 3]

const sumOfElements = myNums.reduce((prev, cur) => prev + cur, 0)

//console.log(sumOfElements)

let bookList = [
    ["Book 1", "Book 2"],
    ["Book 3", "Book 4"]
]

let bookListInObj = [
    {
        bookId: 1,
        bookName: "Science for stupid"
    },
    {
        bookPublishedOn: 2000,
        bookLanguage: "English"
    }
]

let flattedBookList = bookList.reduce( (prev, cur) => prev.concat(cur), [])

let flattedBookListObj = bookListInObj.reduce( (prev, cur) => {
    return {...prev, ...cur}}, {})

console.log(flattedBookList)
console.log(flattedBookListObj)