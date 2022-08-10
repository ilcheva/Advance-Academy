

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