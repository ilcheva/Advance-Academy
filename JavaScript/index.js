


// let paragraph = document.getElementById('greetings')
// paragraph.innerHTML = 'Hello World';
// console.log('Hello from console log');

// let name = prompt('Please insert your name', '')
console.log('showMessage:', showMessage());

function showMessage() {
    // console.log('HELLO');
    return 'Hello from return';
}
showMessage();

(function greetings() {
    console.log('I am IFFE');
})();

// var and let difference
let personName = 'Silvya';
// console.log(window.personName)

const annualYeild = '20%';
console.log(annualYeild);
// annualYeild = '40%';
console.log(annualYeild);

let person = {
    firstName: 'Sylviya',
    lastName: 'Stancheva',
    age: 36,
    isSmoker: false,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }

}
console.log(person.getFullName());
console.log(typeof person);
person = 'Syl';
console.log(typeof person);
