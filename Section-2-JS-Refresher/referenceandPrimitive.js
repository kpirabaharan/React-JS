const person = {
    name: 'Max'
}

const secondPerson = person; //Copies the pointer of person 

const thirdPerson = {
    ...person // Real copy
}

person.name = "Keeshigan";

console.log(secondPerson);
console.log(thirdPerson);