# Rest and spread
You can expand an array, an object or a string using the spread operator ....

Let’s start with an array example. Given

const a = [1, 2, 3]
you can create a new array using

const b = [...a, 4, 5, 6]
You can also create a copy of an array using

const c = [...a]
This works for objects as well. Clone an object with:

const newObj = { ...oldObj }
Using strings, the spread operator creates an array with each char in the string:

const hey = 'hey'
const arrayized = [...hey] // ['h', 'e', 'y']
This operator has some pretty useful applications. The most important one is the ability to use an array as function argument in a very simple way:

const f = (foo, bar) => {}
const a = [1, 2]
f(...a)
(in the past you could do this using f.apply(null, a) but that's not as nice and readable)

The rest element is useful when working with array destructuring:

const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers
and spread elements:

const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, c, d, e) => a + b + c + d + e
const sumOfNumbers = sum(...numbers)
ES2018 introduces rest properties, which are the same but for objects.

## Rest properties:

const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
}

first // 1
second // 2
others // { third: 3, fourth: 4, fifth: 5 }
Spread properties allow to create a new object by combining the properties of the object passed after the spread operator:

const items = { first, second, ...others }
items //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }


# Object and array destructuring
Given an object, using the destructuring syntax you can extract just some values and put them into named variables:

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54 //made up
}

const { firstName: name, age } = person //name: Tom, age: 54
name and age contain the desired values.

The syntax also works on arrays:

const a = [1, 2, 3, 4, 5]
const [first, second] = a
This statement creates 3 new variables by getting the items with index 0, 1, 4 from the array a:

const [first, second, , , fifth] = a
