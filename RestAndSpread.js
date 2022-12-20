//Spreading arrays
const a = [1,2,3,4,5,6]
//         0 1 2

const b = [...a]

const myNameIs = 'Slim shady'
// console.log(...myNameIs)

const func = (a,b,c) => a+b+c;

// console.log(func(...a))

//Object destructuring

const {first, second, ...restOfIt} = {
    first: 1,
    second: 2,
    third: 3,
    fourth:4,
    fifth:5,
}

// console.log(first,second,restOfIt)

// console.log(Object.keys(restOfIt))
//arrays have indexes, Objects have keys 

//array destructuring

const [arrFirst, arrSecond, , ,arrFifth] = a // [1,2,3]

console.log(arrFifth)