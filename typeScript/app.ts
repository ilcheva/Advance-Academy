let message: string = 'Hello Javascript';
console.log(message);
message = 'test';
console.log(message);
let person: {
    id: number,
    name: string,
    salary?: number, // if its optional
};
person = {
    id: 547389543,
    name: 'Silviya Stancheva'
};

let course: [string, number, boolean?];        //touple
course = ['Javascript', 10];
let background, textColor: [number, number, number, number?] // touple
background = [66, 135, 245, 0.5];
textColor = [66, 135, 145];


enum WEEKDAYS {
    MONDAY,
    TUESDAY,
    Wednesday,
    Thursday,
    FRIDAY,

}
let courseLevel: any = 0;
courseLevel = '';

// void only with function not returning data

function showMessage(message: string): void {
    console.log(message);

};
showMessage('hello from function');
showMessage('hello from fn')

function add(x: string | number, y: string | number) {
    if (typeof (x) === 'string' && typeof (y) === 'string') {
        console.log(`Concatenation between x and y: ${x}${y} `);

    }
    if (typeof (x) === 'number' && typeof (y) === 'number') {
        console.log(x + y);
    }
    throw new Error('Parameters must be only numbers or only strings!')
}

add(10, 20)
add('Hello', 'Silvya')
add(20, 'Silviya')

// ALIAS
type Employee = {
    name: string,
    age?: number,
    smoker: boolean,
};
type OutlanderEmployee = Employee & {
    country: string
}

let companyEmployees: Employee = {
    name: 'Silvya',
    smoker: false,
    age: 37,
}
//interface extends like class

interface Person {
    firstName: string;
    lastName: string;
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`
}
getFullName({ firstName: 'sylvia', lastName: 'stancheva' })

// if typescript is locally npx tsc .ts


// Boolean(true) = 1
// Boolean(false) = 0
// 1 < 2 < 3 => 1<3 => 1 => true
// 0 < 1 < 2  => true true
// 0 > 1 > 2 => false
// 0 > 1 < 2 => 0 < 2 true

// ??


// person.department?.name = 'Finances' working in react
//person.(department || {}).name = 'finances'
