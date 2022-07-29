"use strict";
let BASE_URL = 'http://localhost:3000/sales';
// GET ALL SALES
function fetchAllSales() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', BASE_URL);
    xmlHttp.send();
    if (xmlHttp.status === 200) {
        let data = JSON.parse(xmlHttp.responseText);
        console.log(data);
    }
}
// fetchAllSales()
function submitForm(e) {
    e.preventDefault();
    let sales = {
        itemId: document.getElementById('itemId').value,
        temName: document.getElementById('itemName').value,
        //@ts-ignore
        itemPrice: document.getElementById('itemPrice').value,
        //@ts-ignore
        itemQuantity: document.getElementById('itemQuantity').value,
        //@ts-ignore
        totalPrice: function () {
            return this.itemPrice * this.itemQuantity;
        },
        updated: document.getElementById('itemDate').value
    };
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', BASE_URL);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(sales));
}
