// Normal Functions

function printMyName(myName){
    console.log(myName);
}

// Arrow Function, can do with let as well
// No more issues with 'this'
const printMyName2 = myName =>{
    console.log(myName)
}

// Shortcut for return one-liner
const multiply = number => number * 2;

printMyName("Keeshigan");
printMyName2("Keeshigan");
console.log(multiply(10));
