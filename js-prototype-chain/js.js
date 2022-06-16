let Animal = {
    eat: true,
    walk() { console.log('I am animal and i can walk') }
};

let Rabbit = {
    jumps: true,
    walk() {
        console.log('I am rabbit and i love jumping')
    },
    __proto__: Animal
};
console.log(Object.keys(Rabbit));
for (const prop in Rabbit) {
    console.log(prop);
}
// let result = Rabbit.__proto__ = Animal;
let Frog = {
    swim: true,
    jumpLength: 20,
    walk() {
        console.log('I am frog and i love jumping')
    },
    __proto__: Rabbit,
}
Rabbit.walk()
Frog.walk()

// do not console log twice 

let User = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    password: '1234457',
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
        value = `${this.firstName} ${this.lastName}`
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

}
let Admin = {
    __proto__: User,
    isAdmin: true,
}
console.log(Admin.fullName);
Admin.fullName = 'Karetina Petelova';
console.log(Admin.fullName);


// OBJECT DESTRUCTURING

let Person = {
    personName: 'Maria Ilieva',
    country: 'Bulgaria',
    job: 'singer',
    // bestFriend: 'Angel'
}
// console.log(Person.personName);
// console.log(Person.country);
// console.log(Person.job);
// let {personName, country, jobs} = Person;
// console.log(personName);

// let personName, country, job; 
// ({personName, country, job} = Person); /// if veriables are declared before destructuring use brackets
// console.log(personName);


let { personName: fullName, country: personCountry, job: personJob, bestFriend = 'Drago Dragev' } = Person;
console.log('personName/full name', fullName);
console.log(bestFriend);


function employee({ name, job } = {}) {
    return [name, job];
}
console.log(employee({ name: 'Ivan', job: 'singer' }));


// OBJECT METHODS

Object.assign
let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

// console.log(
//     'Object.assign(target, source)',
//     Object.assign(target, source)
// );
console.log(
    'Object.assign(source, target)',
    Object.assign(source, target)
);


// create
let newObject = Object.create(target);
console.log('New object', newObject.a);
newObject.a = 'Hello';
console.log('New object', newObject.a);
console.log('Object', Object.prototype);

// freeze makes the object const

Object.freeze(newObject)
newObject.a = 'new';
console.log('freeze object', newObject.a);
console.log('freeze object', Object.isFrozen(newObject));

Object.preventExtensions(target)
target.alpha = 'alpha';
console.log(target);
console.log(Object.isExtensible(target));