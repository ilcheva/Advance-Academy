

// class Person {
//     private firstName: string;
//     public lastName: string;
//     protected age: number;
//     constructor(firstName: string, lastName: string, age: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// let person = new Person('Vanyo', 'Popazov', 69)

// console.log('person.firstName', person.firstName);
// console.log(person.getFullName());

//interface CamelCase
interface Person {
    readonly firstName: string;
    lastName: string;
    age?: number;
}
let data: Person[] = [
    {
        firstName: 'Vanyo',
        lastName: 'Popazov',
        age: 15,
    },
    {
        firstName: 'Anton',
        lastName: 'Varbedyan',

    }

]
//readonly  работи с конкретния обект 

function getAllPeople(people: Person[]) {
    // people.forEach(({ firstName }) => {
    //     firstName = 'Pesho'
    //     console.log(firstName);

    // }) ts не гърми при деструктиране
    people.forEach((person) => {
        // person.firstName = 'jgfsklfds;'
    })
    console.log(people);


}
getAllPeople(data)

interface StringFormat {
    (
        text: string,
        isUpper: boolean
    ): string;
};

let format: StringFormat = (text: string, isUpper: boolean) => {
    return isUpper ? text.toLocaleUpperCase() : text.toLocaleLowerCase()
}


console.log(format('blabla', false));

interface Json {
    toJson(): string;
}

class Employee implements Json {
    constructor(
        private firstName: string,
        private LastName: string
    ) {

    }
    toJson(): string {
        return JSON.stringify(this)
    }
}
let employee = new Employee('Vanyo', 'Popazov')
console.log(employee.toJson());


// Interface extending

interface MailInterface {
    send(email: string): boolean
    queue(email: string): boolean

}
interface AdditionalMail extends MailInterface {
    laterSending(email: string, after: number): boolean
}
class Mail implements AdditionalMail {
    send(email: string): boolean {
        console.log(`${email} has been send`)
        return true;
    }
    queue(email: string): boolean {
        console.log(`${email} has been set to the queue`)
        return true;
    }
    laterSending(email: string, after: number): boolean {
        console.log(`${email} will be send after ${after} hours`)
        return false;
    }
}
let mail = new Mail()
console.log(mail.send('vanyo.dedaznam@advanceacademy.com'));
console.log(mail.laterSending('vanyo.dedaznam@advanceacademy.com', 4));

interface X {
    x(): void
}
interface Y extends X {
    y(): void
}
interface Z {
    z(): void

}
interface Test extends Y, Z {
    d(): void
}


class Control {
    //@ts-ignore
    private state: boolean
}
interface FullControl extends Control {
    enable(): void
}
class Button extends Control implements FullControl {
    enable(): void {

    }
}
class TextField extends Control { }
// class DatePicker implements FullControl {
//     state: boolean
//     constructor(state: boolean){
//         this.state = state
//     }
//     enable(): void {

//     }
// }

//CUSTOM TYPES

type Demo1 = {
    x: string
}
type Demo2 = {
    y: string
}
type Demo3 = Demo1 & Demo2;
type Test1 = string | number;

interface BusinessPartner {
    name: string;
    contract: string;
    credit: number;
}
interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}
type EmployeeType = Identity & Contact & BusinessPartner;

let employeeT: EmployeeType = {
    id: 1,
    name: 'Joro Atanasov Becuma',
    email: 'becuma@bec.com',
    phone: '+3598888000',
    contract: 'fff',
    credit: 202929
}
// TO DO да се намери вариант как да се имплементират всички  Name
// generic types 
type numberString = string | number;

function sum(a: numberString, b: numberString) {
    if (typeof a === 'string' && typeof b === 'string') {
        return `Hello ${a}, today was very ${b} day...`
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new Error('invalid data')
}

console.log(sum(8, 4));

type myTestUnion = Contact | Identity;
function checkMyTestUnion(x: myTestUnion){
    /// generic types 
}
 