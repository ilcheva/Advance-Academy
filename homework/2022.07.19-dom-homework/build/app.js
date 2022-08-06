"use strict";
function newUserData(e) {
    e.preventDefault();
    let firstName, lastName, dateOfBirth, placeOfBirth, nationality, idDocument, NIN, userAddress, userPostcode, userCity, userCountry, userCountryTaxes, userTaxIdNumber, userOccupation;
    firstName = document.getElementById('firstName');
    lastName = document.getElementById('lastName');
    dateOfBirth = document.getElementById('dateOfBirth');
    placeOfBirth = document.getElementById('placeOfBirth');
    nationality = document.getElementById('nationality');
    idDocument = document.getElementById('idDocument');
    NIN = document.getElementById('NIN');
    userAddress = document.getElementById('userAddress');
    userPostcode = document.getElementById('postcode');
    userCity = document.getElementById('city');
    userCountry = document.getElementById('country');
    userCountryTaxes = document.getElementById('countryTaxes');
    userTaxIdNumber = document.getElementById('taxNumber');
    userOccupation = document.getElementById('occupation');
    let yesBtn = document.getElementById('btn-check-1');
    let noBtn = document.getElementById('btn-check-2');
    let userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        placeOfBirth: placeOfBirth.value,
        nationality: nationality.value,
        idDocument: parseInt(idDocument.value),
        NIN: parseInt(NIN.value) || 0,
        userAddress: userAddress.value,
        userPostCode: parseInt(userPostcode.value),
        userCity: userCity.value,
        userCountry: userCountry.value,
        userCountryTaxes: userCountryTaxes.value,
        userTaxIdNumber: parseInt(userTaxIdNumber.value),
        userOccupation: userOccupation.value,
        PEP: yesBtn.checked ? true : false,
    };
    let existingData = JSON.parse(localStorage.getItem("allData"));
    if (existingData === null)
        existingData = [];
    localStorage.setItem('userData', JSON.stringify(userData));
    existingData.push(userData);
    localStorage.setItem("allData", JSON.stringify(existingData));
    // clear data in form
    firstName.value = '';
    lastName.value = '';
    dateOfBirth.value = '';
    placeOfBirth.value = '';
    nationality.value = '';
    idDocument.value = '';
    NIN.value = '';
    userAddress.value = '';
    userPostcode.value = '';
    userCity.value = '';
    userCountry.value = '';
    userCountryTaxes.value = '';
    userTaxIdNumber.value = '';
    userOccupation.value = '';
    yesBtn.checked = true;
    noBtn.checked = false;
}
let dataEntries = JSON.parse(localStorage.getItem("allData"));
if (dataEntries === null)
    dataEntries = [];
function newEnrolment() {
    let currentEntries = JSON.parse(localStorage.getItem("allData"));
    if (currentEntries === null)
        currentEntries = [];
    dataEntries.length === currentEntries.length ?
        console.log('no new entries') : console.log('new entry');
}
setInterval(newEnrolment, 10000);
