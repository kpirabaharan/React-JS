// Spread used to split up array elements OR object properties
const numbers = [1, 2, 3];
const newNumbers = [...numbers, numbers[0] = 4];

console.log(newNumbers);

const person = {
    name: 'Keeshi'
}

const newPerson = {
    ...person,
    age: 23
}

//console.log(newPerson);

// Rest used to merge a list of c function arguments into an array
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 2));
