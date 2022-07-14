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
if (location.pathname.indexOf('about.html') > -1) {
    setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5500/build/gallery.html';
    }, 3000);
    // alert('yes')
}
// през променлива дали наистина искам да пренасочва или да не пренасочва
