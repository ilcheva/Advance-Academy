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
console.log(greeting);

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


let employee = {
    fullName: 'Ivan Kostov',
    age: '27',
    salary: 3500
}
for (const el in employee) {
    // console.log(employee[el]);

}

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

getName()
function getName() {
    console.log('Ivan');
}

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
downLoad(url, process)