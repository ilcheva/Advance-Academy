
let BASE_URL = 'http://localhost:3000/sales'
interface Sales {
    itemId: string,
    temName: string,
    itemPrice: number,
    itemQuantity: number,
    totalPrice: () => void,
    updated: string
}

// GET ALL SALES

// function fetchAllSales() {
//     let xmlHttp = new XMLHttpRequest()
//     xmlHttp.open('GET', BASE_URL)
//     xmlHttp.send()

//     if (xmlHttp.status === 200) {
//         let data = JSON.parse(xmlHttp.responseText)
//         console.log(data)
//     }
// }
// // fetchAllSales()


// function submitForm(e: Event) {
//     e.preventDefault()
//     let sales: Sales = {
//         itemId: (document.getElementById('itemId') as HTMLInputElement).value,
//         temName: (document.getElementById('itemName') as HTMLInputElement).value,
//         //@ts-ignore
//         itemPrice: (document.getElementById('itemPrice') as HTMLInputElement).value,
//         //@ts-ignore
//         itemQuantity: (document.getElementById('itemQuantity') as HTMLInputElement).value,
//         //@ts-ignore
//         totalPrice: function () {
//             return this.itemPrice * this.itemQuantity
//         },
//         updated: (document.getElementById('itemDate') as HTMLInputElement).value
//     }
//     let xmlHttp = new XMLHttpRequest();
//     xmlHttp.open('POST', BASE_URL);
//     xmlHttp.setRequestHeader("Content-Type", "application/json");
//     xmlHttp.send(JSON.stringify(sales));
//     xmlHttp.send(JSON.stringify(sales));
//     if (xmlHttp.status == 200) {
//         let data = JSON.parse(xmlHttp.responseText);
//         console.log('DATA', data);

//     }
// }
// //Asynchronous programming

// let xmlHttp: any;
// //fetch from server configoration
// xmlHttp('/api/server-config', (config: any) => {
//     //fetching the user info if he/she is logged
//     xmlHttp(`/api/${config.USER_API}`, (user: any) => {
//         //fetch the items for the user
//         xmlHttp(`/api/${user.id}`, (userRole: any) => {
//             ///....
//         })
//     })
// })

// //then()
// let $http: any;

// $http.get('/api/server-config').then(
//     (configResponse: any) => $http.get(`/api/${configResponse.USER_API}`)
// ).then(
//     (userResponse: any) => $http.get(`/api/${userResponse.id}`),
//     (error: Error) => error ? console.log(error) : false

// ).then();

// //Promise chain
// function myPromiseChainFn() {
//     //.....
// }

// myPromiseChainFn()
// .then(success1, erroe1) //Promise 1
// .then(success2, err2) //Promise 2
// .then(success3, err3) // Promise 3


// function asyncFunction(url: string) {
//     return new Promise((resolve: any, reject: any) => {
//         if (1 < 2) {
//             resolve() //ok
//         } else {
//             reject() // error
//         }
//     })
// }

// function sendRequest(url: string) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`reuqest data comes from ${url}`);
//             if (url !== null && typeof url !== 'undefined') {
//                 resolve('valid url')
//             } else {
//                 reject('invalid url')
//             }

//         }, 2000)
//     })
// };

// sendRequest(`/api/my-data-sales`)
//     .then((sales: any) => {
//         console.log(sales);

//     })
//     .then((products: any) => {
//         console.log(products);

//     })
//     .catch((err) => {
//         console.log(err);

//     })

//Promise ALL



// function sendRequestArr(url: string) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`reuqest data comes from ${url}`);
//             if (url.indexOf('sales') !== -1) {
//                 resolve([
//                     { itemId: '321432', itemName: 'test', size: 130, itemPrice: 10, itemQuantity: 10, totalPrice: 100 }
//                     { itemId: '321432', itemName: 'test', size: 130, itemPrice: 10, itemQuantity: 10, totalPrice: 100 }
//                 ])
//             } else if (url.indexOf("sizes='<128'") !== -1) {
//                 resolve([
//                     { itemId: '321432', itemName: 'test', size: 130, itemPrice: 10, itemQuantity: 10, totalPrice: 100 }

//                 ])
//             } else if (url.indexOf("itemPrice=>'20'") !== -1) {
//                 resolve

//             } else {
//                 reject('no data, try with different cases ...')
//             }

//         }, 2000)
//     })
// };
// Promise.all([
//     sendRequest('/sales/'),
//     sendRequest('/sales/sizes="<128"'),
//     sendRequest('/sales/itemPrice=>"20"')
// ])
//     .then((result) => console.log(result))
//     .catch((err: Error) => console.log(err))


// Promise.race()
//ASYNC ... AWAIT

//var1
// async function sayHello() {
//     return 'Hello';   
//    }

//var2 
async function sayHello() {
    return Promise.resolve('Hello')
}
sayHello()
    .then(console.log)



// let sayHelloLiteral = async function sayHelloLiteral(){
//     return 'Hello ';
// }

let sayHelloLiteral = async () => {
    return 'Hello Literal'
}
sayHelloLiteral()
    .then(console.log)

async function showMessage() {
    let result = await sayHello();
    console.log(result);

}
function doubleFn(n: number) {
    return (n % 2 === 0) ? n * 2 : n;
}
doubleFn(50);
doubleFn(5);

function testFn(test: () => void) {
    test();
}
function orderPizza(type: string, name: string, callback: (str: string) => void) {
    console.log(`Pizza ${type} form ${name} is ordered`);
    console.log(`Pizza is for preparation`);

    setTimeout(() => {
        let message = `Dear ${name}, your ${type} pizza is ready and the total sum is 15 lv`;
        callback(message);

    }, 5000)


}
orderPizza('Pineapple', 'Vanyo', (message: string) => console.log(message))

// Recursive

function recursiveFunction() {
    let condition = true
    if (condition) {
        //stop call recursionFunction()
    } else {
        //recursionFunction()
        recursiveFunction()
    }

}
//@ts-ignore
function factoral(x: number) {
    if (x < 0) return;
    if (x === 0) return 1;
    return x * factoral(x - 1)

}
console.log(factoral(4)); //4*3*2*1

for (let i = 4; i <= 0; i--) {

}
//@ts-ignore
function sum(n: number) {
    if (n <= 0) return 0;
    return n + sum(n - 1);
}
console.log(sum(5));
//@ts-ignore
function countdown(n: number) {
    if (n < 0) return 0;
    //console.log(n);
    return countdown(n - 1);
}

console.log(countdown(10));
interface Employee {
    fullName: string,
    salary: number
}
interface SalesDepartment {
    salesDepartment: Employee[];

}
interface DevelopmentDepartment {
    frontEnd: Employee[];
    backEnd: Employee[];
}
interface Company {
    salesDepartment: SalesDepartment,
    developmentDepartment: DevelopmentDepartment
}
let company: Company = {
    salesDepartment:[
        {
            fullName: 'John Doe',
            salary: 1000
        },
        {
            fullName: 'Alice Johnson',
            salary: 500
        }
    ],
    developmentDepartment: {
        frontEnd: [
            {
                fullName: 'Petr Smith',
                salary: 3500
            },
            {
                fullName: 'Ivana Smith',
                salary: 1500
            }
        ],
        backEnd: [
            {
                fullName: 'Ivon Smith',
                salary: 13500
            },
            {
                fullName: 'Dima Smith',
                salary: 10500
            }
        ]
    }
}

function totalSalary(department: any) {
    // recursive fn to get total salary sum
    // console.log(department.salesDepartment.forEach((el:any)=> console.log(el.salary)))
   
    // department.developmentDepartment.hasOwnProperty('frontEnd')
    // console.log(department.developmentDepartment.hasOwnProperty('frontEnd'));
    
    
}
totalSalary(company)
// company.developmentDepartment.frontEnd.forEach(element => {
//     console.log(element.salary);
        
// });
