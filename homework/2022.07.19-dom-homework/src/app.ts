


function newUserData(e: Event) {
    e.preventDefault()
    let firstName: HTMLInputElement, lastName: HTMLInputElement, dateOfBirth: HTMLInputElement, placeOfBirth: HTMLInputElement, nationality: HTMLInputElement,
        idDocument: HTMLInputElement, NIN: HTMLInputElement, userAddress: HTMLInputElement, userPostcode: HTMLInputElement, userCity: HTMLInputElement,
        userCountry: HTMLInputElement, userCountryTaxes: HTMLInputElement, userTaxIdNumber: HTMLInputElement, userOccupation: HTMLInputElement;

    firstName = document.getElementById('firstName') as HTMLInputElement;
    lastName = document.getElementById('lastName') as HTMLInputElement;
    dateOfBirth = document.getElementById('dateOfBirth') as HTMLInputElement;
    placeOfBirth = document.getElementById('placeOfBirth') as HTMLInputElement;
    nationality = document.getElementById('nationality') as HTMLInputElement;
    idDocument = document.getElementById('idDocument') as HTMLInputElement;
    NIN = document.getElementById('NIN') as HTMLInputElement;
    userAddress = document.getElementById('userAddress') as HTMLInputElement;
    userPostcode = document.getElementById('postcode') as HTMLInputElement;
    userCity = document.getElementById('city') as HTMLInputElement;
    userCountry = document.getElementById('country') as HTMLInputElement;
    userCountryTaxes = document.getElementById('countryTaxes') as HTMLInputElement;
    userTaxIdNumber = document.getElementById('taxNumber') as HTMLInputElement;
    userOccupation = document.getElementById('occupation') as HTMLInputElement;
    let yesBtn = document.getElementById('btn-check-1') as HTMLInputElement;
    let noBtn = document.getElementById('btn-check-2') as HTMLInputElement;

    let userData: {
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        placeOfBirth: string,
        nationality: string,
        idDocument: number,
        NIN?: number,
        userAddress: string,
        userPostCode: number,
        userCity: string,
        userCountry: string,
        userCountryTaxes: string,
        userTaxIdNumber: number,
        userOccupation: string,
        PEP: boolean,
    } =
    {
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

    }

    let existingData = JSON.parse(localStorage.getItem("allData") as string);
    if (existingData === null) existingData = [];
    localStorage.setItem('userData', JSON.stringify(userData))
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
let dataEntries = JSON.parse(localStorage.getItem("allData") as string);
if (dataEntries===null) dataEntries=[];

function newEnrolment() {
    let currentEntries = JSON.parse(localStorage.getItem("allData") as string);
    if(currentEntries===null) currentEntries=[];
    dataEntries.length === currentEntries.length ?
        console.log('no new entries') : console.log('new entry');

}
setInterval(newEnrolment, 10000)



