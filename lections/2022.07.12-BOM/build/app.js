"use strict";
// BOM
var counter = 1;
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log('outerHeight', window.outerHeight);
console.log('outerWidth', window.outerWidth);
let url = 'https://www.zoya.bg/', features = 'height=600px, width=800px';
function showNewWindow() {
    // window.open(url,windowName, [windowFeatures] )   
    window.open(url, 'zoya', features);
    // let newTab = window.open(url, 'zoya', features);
    // setTimeout(() => {
    //     newTab?.resizeTo(400, 300)
    // }, 5000)
}
let setToggleColor;
function toggleColorText() {
    let text = document.getElementById('flash');
    text.style.color = text.style.color === 'green' ? 'yellow' : 'green';
}
function start() {
    setToggleColor = setInterval(toggleColorText, 1000);
}
function stopInterval() {
    clearInterval(setToggleColor);
}
console.log(window.location);
//LOCATION
function urlAssign() {
    // window.location = 'http://127.0.0.1:5500/build/about.html' as any;
    // window.location.assign('http://127.0.0.1:5500/build/about.html');
    window.location.href = 'http://127.0.0.1:5500/build/about.html';
}
// if (location.pathname.indexOf('about.html') > -1) {
//     setTimeout(() => {
//         window.location.href = 'http://127.0.0.1:5500/build/gallery.html';
//     }, 3000)
//     // alert('yes')
// }
// // през променлива дали наистина искам да пренасочва или да не пренасочва
// Navigator
// navigator.userAgent.includes('Edg') ? alert('i am IE') : alert('i am not ie');
//History
//history.back() history.forward() history.go()
// local storage and cookies 
function submitData(e) {
    e.preventDefault();
    let firstName, lastName, userName, password;
    firstName = document.getElementById('firstName');
    lastName = document.getElementById('lastName');
    userName = document.getElementById('userName');
    password = document.getElementById('firstName');
    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        password: password.value,
    };
    localStorage.setItem('user', JSON.stringify(user));
}
let userData = localStorage.getItem('user');
console.log(JSON.parse(userData));
let data = JSON.parse(userData) || {
    firstName: 'Mihail',
    lastName: 'Dimitrov',
    userName: 'blabla',
    password: 'blabla'
};
console.log(data.firstName);
localStorage.removeItem('user');
