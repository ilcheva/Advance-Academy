// LOOPS

let employee_1 = 'Silviya';
let employee_2 = 'Pesho';
let employee_3 = 'Ivan';
let employeeNames: string[] = ['Sylvia', 'Pesho', 'Ivan', 'Vanya', 'Dian', 'Marin', 'Gancho'];
let greeting: string = '';

// For

for (let i: number = 0; i < employeeNames.length; i++) {
    greeting += `${employeeNames[i]}  `;

}
// console.log(greeting);

// console.log(employee_1);
let number: number = 5;
for (let i = 0; i < number; i++) {
    // console.log('text');

}
let sum: number = 0;
// num =100;
for (let index = 1; index <= 100; index++) {
    sum += index;
}
// console.log(sum);

// object => for (elemtn in object) => for in
// array, sring => for(element of array) => for of


// let employee = {
//     fullName: 'Ivan Kostov',
//     age: '27',
//     salary: 3500
// }
// for (const el in employee) {
//     // console.log(employee[el]);

// }

for (let el of employeeNames) {
    // console.log(el);

}
let nameTest: string = 'typescript';
for (const el of nameTest) {
    // console.log(el);

}

for (let i = 0; i < employeeNames.length; i++) {
    if (i === 4) {
        break;
        // continue;
    }
    // console.log(employeeNames[i]);
}

/// Function

function showMessage(name: string, num: number) {
    console.log(`Hello ${name}, it is your ${num}-th lection today`);

}
showMessage('Ivan', 6)

function add(a: number, b: number) {
    return a + b;
}
console.log(add(2, 10));

// getName()
// function getName() {
//     console.log('Ivan');
// }

let getNameLiteral = function () {
    console.log('Ivan literal');
}
getNameLiteral();

(function () {
    console.log('IIFE Ivan');
})();


// arrow function 
let arrowGreet = (name: string, num: number) => console.log(`Hello ${name}, it is your ${num}-th lection today`);
arrowGreet('marin', 4)

let addArrow = (a: number, b: number) => a + b
console.log(addArrow(4, 5));


//CALLBACK

let nums: number[] = [90, 15, 1, 2, 7, 4, 5, 6, 7, 8, 9];
let sortedNums = nums.sort((a: number, b: number) => a - b);
// function getEvenNum(element: number) {
//     return element % 2 === 0;

// }
// console.log(sortedNums);

let evenNumbers = nums.filter((el: number) => el % 2 === 0);
let oddNumbers = nums.filter((el: number) => el % 2 === 1); // el % 2 !== 0
// console.log(evenNumbers);
// console.log(oddNumbers);

function downLoad(url: string, callback: any) {
    setTimeout(() => {
        console.log(`Downloading ${url} ...`);
        callback(url)
    }, 5000)
}

function process(picture: string) {
    console.log(`Processing ${picture}`);
}

let url = 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'
// downLoad(url, process)

function getNameNew() {
    let firstName: string = 'Ivan';
    let lastName: string = 'Kostov';
    return [firstName, lastName];
}
let fullName = getNameNew();
// console.log(fullName);

function swap(a: number, b: number) {
    let temporaryState = a;
    a = b;
    b = temporaryState;
    // [a, b] = [b, a];
}
console.log(swap.length);
console.log(swap.prototype);

// OBJECT
// literal   interface or type 
// its neseecery to create interface before working with objects
interface Person {
    firstName: string;
    lastName: string;
    fullName: () => void;
    age?: number;
}
let person: Person = {
    firstName: 'Drago',
    lastName: 'Draganov',
    fullName: function () {
        console.log(`${this.firstName}, ${this.lastName}`);

    }
}
console.log(person.firstName);
// console.log(person['full name']);
person.firstName = 'Draga';
console.log(person.firstName);

person.age = 20;
console.log(person);
// delete person['full name'];

for (const key in person) {

    console.log(key, person[key]);
}

person.fullName();
// обектът е колекция от двоики с ключ и стойност с някакви данни , могат да бъдат характеристики и методи 


// PROTOTYPE
interface AnimalInterface {
    type?: string;
    breed?: string;
    tax?: number;
    price?: number;
    totalPrice?: () => void;
    name?: string;
}
let animal: Animal = {};
Object.defineProperties(animal, {
    type: {
        value: 'dog'
    },
    breed: {
        value: 'akita',
        writable: true

    },
    tax: {
        value: 30
    },
    price: {
        value: 2000
    },
    totalPrice: {
        get: function () {
            return this.tax + this.price;
        }
    }
});
// delete animal.type

console.log(`The price of ${animal.breed} is ${animal.totalPrice}lv`);

animal.breed = 'Frenchie';
console.log(`The price of ${animal.breed} is ${animal.totalPrice}lv`);


// constructor function 
// function Animal(this:any, type: string, breed: string, tax: number, price: number, totalPrice?: number ) {
//     this.type = type;
//     this.breed = breed;
//     this.tax = tax;
//     this.price = price;
//     this.totalPrice = totalPrice;
// }

function Animal(type: string, breed: string, tax: number, price: number, totalPrice?: number) {
    let localAnimal: AnimalInterface = {
        type: type,
        breed: breed,
        tax: tax,
        price: price,

    }
    return localAnimal
}

let constructAnimal = Animal('dog', 'husky', 50, 300);
constructAnimal.name = 'Lily';

console.log(constructAnimal);

// PROTOTYPE CHAIN
console.log(Object.prototype.constructor === Object);

interface PersonFnInterface {
    name: string;
    greet?(): void;

}
function PersonFn(name: string) {
    let person: PersonFnInterface = {
        name: name,
    }
    return person
}
PersonFn.prototype.greet = function (name: string) {
    return `Hi. My name is ${this.name}`
}
let newName = PersonFn('Silvya');
let result = newName.greet
// console.log(PersonFn.prototype.constructor);
console.log(newName);

// console.log(result);

// console.log(newName.greet());

