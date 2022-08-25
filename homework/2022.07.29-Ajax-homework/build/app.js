"use strict";
let BASE_URL = 'http://localhost:3000';
let itemId = document.getElementById('itemId'), itemName = document.getElementById('itemName'), itemPrice = document.getElementById('itemPrice'), itemQuantity = document.getElementById('itemQuantity'), updated = document.getElementById('itemDate'), editItemId = document.getElementById('editItemId'), editItemName = document.getElementById('editItemName'), editItemPrice = document.getElementById('editItemPrice'), editItemQuantity = document.getElementById('editItemQuantity'), editUpdated = document.getElementById('editItemDate');
let result = document.getElementById('result');
let modalWrap = document.getElementById('modal');
//@ts-ignore
let modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
// GET ALL SALES
function fetchAllSales() {
    fetch(`${BASE_URL}/sales`)
        .then((res) => res.json())
        .then(showData)
        .catch((err) => console.error(err));
}
fetchAllSales();
function submitForm(e) {
    e.preventDefault();
    let sales = {
        itemId: itemId.value,
        itemName: itemName.value,
        //@ts-ignore
        itemPrice: itemPrice.value,
        //@ts-ignore
        itemQuantity: itemQuantity.value,
        // totalPrice:function () {
        //             return this.itemPrice * this.itemQuantity
        //         }
        // the server does not get data from function 
        updated: updated.value,
    };
    console.log(sales);
    fetch(`${BASE_URL}/sales`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sales)
    }).catch((err) => console.error(err));
    itemId.value = '';
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
    fetchAllSales();
}
function showData() {
    if (result.innerHTML !== '') {
        result.innerHTML = '';
    }
    fetch(`${BASE_URL}/sales`, {
        method: 'GET'
    })
        .then((res) => res.json())
        .then((data) => {
        data.forEach((element) => {
            let container = createElement('div', 'col-sm-6 col-md-3 mb-3');
            let card = createElement('div', 'card');
            let cardName = createElement('div', 'card-header', `Id: ${element.itemId}`);
            let ul = createElement('ul', 'list-group');
            let itemName = createElement('li', 'list-group-item', `Name: ${element.itemName}`);
            let itemPrice = createElement('li', 'list-group-item', `Price: ${element.itemPrice}`);
            let itemQuantity = createElement('li', 'list-group-item', `Quantity: ${element.itemQuantity}`);
            let btnCont = createElement('div', 'row g-0');
            let editBtn = createElement('button', 'btn btn-primary col ', 'Edit', 'data-key', element._id);
            let deleteBtn = createElement('button', 'btn btn-danger col', 'Delete', 'data-key', element._id);
            editBtn.addEventListener('click', showModal);
            deleteBtn.addEventListener('click', deleteElement);
            ul.appendChild(itemName);
            ul.appendChild(itemPrice);
            ul.appendChild(itemQuantity);
            card.appendChild(cardName);
            card.appendChild(ul);
            btnCont.appendChild(editBtn);
            btnCont.appendChild(deleteBtn);
            card.appendChild(btnCont);
            container.appendChild(card);
            result.appendChild(container);
        });
    })
        .catch((err) => console.error(err));
}
function showModal(e) {
    let id = this.getAttribute('data-key');
    let patchData = document.getElementById('patchData');
    patchData === null || patchData === void 0 ? void 0 : patchData.setAttribute('data-key', id);
    patchData === null || patchData === void 0 ? void 0 : patchData.addEventListener('click', editFromModal);
    modal.show();
}
function editFromModal(e) {
    e.preventDefault();
    let id = this.getAttribute('data-key');
    let editSales = {
        itemId: editItemId.value,
        itemName: editItemName.value,
        //@ts-ignore
        itemPrice: editItemPrice.value,
        //@ts-ignore
        itemQuantity: editItemQuantity.value,
        updated: editUpdated.value,
    };
    if (editItemId.value !== '' && editItemName.value !== ''
        && editItemPrice.value !== '' && editItemQuantity.value !== '') {
        validation(true);
        fetch(`${BASE_URL}/sales/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editSales)
        })
            .then(showData)
            .catch((err) => console.log(err));
        modal.hide();
    }
    else {
        validation(false);
    }
    editItemId.value = '';
    editItemName.value = '';
    editItemPrice.value = '';
    editItemQuantity.value = '';
    editUpdated.value = '';
}
function deleteElement(e) {
    e.preventDefault();
    let id = this.getAttribute('data-key');
    fetch(`${BASE_URL}/sales/${id}`, {
        method: 'DELETE'
    })
        .then(showData)
        .catch((err) => console.error(err));
}
function validation(valid) {
    let invalid = document.getElementsByClassName('invalid-feedback');
    if (valid == false) {
        // deletes already input data 
        Array.from(invalid).forEach(element => {
            element.style.display = 'block';
        });
    }
    else {
        Array.from(invalid).forEach(element => {
            element.style.display = 'none';
        });
    }
}
function createElement(element, classes, content, attribute, value) {
    let newElement = document.createElement(element);
    newElement.className = classes;
    newElement.textContent = content;
    newElement.setAttribute(attribute, value);
    return newElement;
}
