class Person{
        Name = 'FirstNAME';


    printMyName = () => {
        console.log(this.Name);
    }
}

class Keeshigan extends Person{

    gender = "Male";
    myName = "Keeshigan";

    printGender = () => {
        console.log(this.gender);
    }
}

const person = new Person();
person.printMyName();

const keesh = new Keeshigan();
keesh.printMyName();
keesh.printGender();
