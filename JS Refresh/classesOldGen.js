class Person{

    constructor() {
        this.name = 'FirstNAME';
    }

    printMyName(){
        console.log(this.name);
    }
}

class Keeshigan extends Person{

    constructor(){
        super(); // Call superclass constructor
        this.gender = "Male";
        this.name = "Keeshigan";
    }

    printGender() {
        console.log(this.gender);
    }
}


const person = new Person();
person.printMyName();

const keesh = new Keeshigan();
keesh.printMyName();
keesh.printGender();
