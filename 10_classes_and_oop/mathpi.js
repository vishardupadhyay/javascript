// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

const myNewObject = {
    name: 'adrakwali',
    price: '10 ki',
    isAvailable: true
}

// confire, writeable and configurable of the price to false
Object.defineProperty(myNewObject, 'price', {
    writable: false,
    configurable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myNewObject, "price"));