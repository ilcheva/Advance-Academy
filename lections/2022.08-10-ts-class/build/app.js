"use strict";
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
let data = [
    {
        firstName: 'Vanyo',
        lastName: 'Popazov',
        age: 15,
    },
    {
        firstName: 'Anton',
        lastName: 'Varbedyan',
    }
];
//readonly  работи с конкретния обект 
function getAllPeople(people) {
    // people.forEach(({ firstName }) => {
    //     firstName = 'Pesho'
    //     console.log(firstName);
    // }) ts не гърми при деструктиране
    people.forEach((person) => {
        // person.firstName = 'jgfsklfds;'
    });
    console.log(people);
}
getAllPeople(data);
;
let format = (text, isUpper) => {
    return isUpper ? text.toLocaleUpperCase() : text.toLocaleLowerCase();
};
console.log(format('blabla', false));
class Employee {
    constructor(firstName, LastName) {
        this.firstName = firstName;
        this.LastName = LastName;
    }
    toJson() {
        return JSON.stringify(this);
    }
}
let employee = new Employee('Vanyo', 'Popazov');
console.log(employee.toJson());
class Mail {
    send(email) {
        console.log(`${email} has been send`);
        return true;
    }
    queue(email) {
        console.log(`${email} has been set to the queue`);
        return true;
    }
    laterSending(email, after) {
        console.log(`${email} will be send after ${after} hours`);
        return false;
    }
}
let mail = new Mail();
console.log(mail.send('vanyo.dedaznam@advanceacademy.com'));
console.log(mail.laterSending('vanyo.dedaznam@advanceacademy.com', 4));
class Control {
}
class Button extends Control {
    enable() {
    }
}
class TextField extends Control {
}
let employeeT = {
    id: 1,
    name: 'Joro Atanasov Becuma',
    email: 'becuma@bec.com',
    phone: '+3598888000',
    contract: 'fff',
    credit: 202929
};
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return `Hello ${a}, today was very ${b} day...`;
    }
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    throw new Error('invalid data');
}
console.log(sum(8, 4));
function checkMyTestUnion(x) {
    /// generic types 
}
