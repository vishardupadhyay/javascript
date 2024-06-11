
/*
    forEach does not return any values.
    if you want to return the values use filter instead of forEach
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = myNums.filter((num)=> {
    return num > 5
})

const filterNumbers = []

myNums.forEach( (num) => {
    if(num > 5){
        filterNumbers.push(num)
    }
})

//console.log(filterNumbers)

const books = [
    {
        title: "Book 1",
        genre: "Fiction",
        published: 1981,
        edition: 2004
    },
    {
        title: "Book 2",
        genre: "Non-Fiction",
        published: 1992,
        edition: 2008
    },
    {
        title: "Book 3",
        genre: "History",
        published: 1999,
        edition: 2007
    },
    {
        title: "Book 4",
        genre: "Non-Fiction",
        published: 1989,
        edition: 2010
    },
    {
        title: "Book 5",
        genre: "Science",
        published: 2009,
        edition: 2014
    },
    {
        title: "Book 6",
        genre: "Fiction",
        published: 1987,
        edition: 2010
    },
    {
        title: "Book 7",
        genre: "History",
        published: 1986,
        edition: 1996
    }
]

const filteredBooks = books.filter( (book) => book.genre === "History")
const publishedAfter2007 = books.filter( (book) => book.published >= 1995 && book.genre === "History")
console.log(publishedAfter2007)