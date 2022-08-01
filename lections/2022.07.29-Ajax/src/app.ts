
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

function fetchAllSales() {
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', BASE_URL)
    xmlHttp.send()

    if (xmlHttp.status === 200) {
        let data = JSON.parse(xmlHttp.responseText)
        console.log(data)
    }
}
// fetchAllSales()


function submitForm(e: Event) {
    e.preventDefault()
    let sales: Sales = {
        itemId: (document.getElementById('itemId') as HTMLInputElement).value,
        temName: (document.getElementById('itemName') as HTMLInputElement).value,
        //@ts-ignore
        itemPrice: (document.getElementById('itemPrice') as HTMLInputElement).value,
        //@ts-ignore
        itemQuantity: (document.getElementById('itemQuantity') as HTMLInputElement).value,
        //@ts-ignore
        totalPrice: function () {
            return this.itemPrice * this.itemQuantity
        },
        updated: (document.getElementById('itemDate') as HTMLInputElement).value
    }
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', BASE_URL);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(sales));
    xmlHttp.send(JSON.stringify(sales));
    if (xmlHttp.status == 200) {
        let data = JSON.parse(xmlHttp.responseText);
        console.log('DATA', data);

    }
}
//Asynchronous programming

let xmlHttp: any;
//fetch from server configoration
xmlHttp('/api/server-config', (config: any) => {
    //fetching the user info if he/she is logged
    xmlHttp(`/api/${config.USER_API}`, (user: any) => {
        //fetch the items for the user
        xmlHttp(`/api/${user.id}`, (userRole: any) => {
            ///....
        })
    })
})

//then()
let $http: any;

$http.get('/api/server-config').then(
    (configResponse: any) => $http.get(`/api/${configResponse.USER_API}`)
).then(
    (userResponse: any) => $http.get(`/api/${userResponse.id}`),
    (error: Error) => error ? console.log(error) : false

).then();

//Promise chain
function myPromiseChainFn() {
    //.....
}

// myPromiseChainFn()
// .then(success1, erroe1) //Promise 1
// .then(success2, err2) //Promise 2
// .then(success3, err3) // Promise 3


function asyncFunction(url: string) {
    return new Promise((resolve: any, reject: any) => {
        if (1 < 2) {
            resolve() //ok
        } else {
            reject() // error
        }
    })
}

function sendRequest(url: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`reuqest data comes from ${url}`);
            if (url !== null && typeof url !== 'undefined') {
                resolve('valid url')
            } else {
                reject('invalid url')
            }

        }, 2000)
    })
};

sendRequest(`/api/my-data-sales`)
    .then((sales: any) => {
        console.log(sales);

    })
    .then((products: any) => {
        console.log(products);

    })
    .catch((err) => {
        console.log(err);

    })

//Promise ALL



function sendRequestArr(url: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`reuqest data comes from ${url}`);
            if (url.indexOf('sales') !== -1) {
                resolve([
                    { itemId: '321432', itemName: 'test', size: 130, itemPrice: 10, itemQuantity: 10, totalPrice: 100 }
                    { itemId: '321432', itemName: 'test', size: 130, itemPrice: 10, itemQuantity: 10, totalPrice: 100 }
                ])
            } else if (url.indexOf("sizes='<128'") !== -1) {
                resolve([
                    { itemId: '321432', itemName: 'test', size: 130, itemPrice: 10, itemQuantity: 10, totalPrice: 100 }

                ])
            } else if (url.indexOf("itemPrice=>'20'") !== -1) {
                resolve

            } else {
                reject('no data, try with different cases ...')
            }

        }, 2000)
    })
};
Promise.all([
    sendRequest('/sales/'),
    sendRequest('/sales/sizes="<128"'),
    sendRequest('/sales/itemPrice=>"20"')
])
    .then((result) => console.log(result))
    .catch((err: Error) => console.log(err))


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

let sayHelloLiteral = async()=>{
    return 'Hello Literal'
}
sayHelloLiteral()
.then(console.log)

async function showMessage(){
    let result = await sayHello();
    console.log(result);
    
}