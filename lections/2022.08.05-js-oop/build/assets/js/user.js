import messageLib, { setMessage } from './app.js'
// import {defalut as test, setMessage} from './app.js'

console.log('reexported messageLib sum', messageLib.sum())
setMessage('Hello User')

//PROTOTYPES && CLASSES
//PROTORYPE
// function Employee(name) {
//     this.name = name
// }
// Employee.prototype.getName = function () {
//     return this.name
// }

// let employee = new Employee('John Doe')
// console.log(employee.getName())

//CLASS
class Employee {
    constructor(name){
        this.name = name;
    }

    getName() {
        return this.name
    }
} 

let employee = new Employee('Pepi Pepi')
console.log(employee.getName());