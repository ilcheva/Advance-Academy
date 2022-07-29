
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

}   