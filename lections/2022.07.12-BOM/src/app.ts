// BOM

var counter = 1;


console.log(window.innerHeight);
console.log(window.innerWidth);
console.log('outerHeight', window.outerHeight);
console.log('outerWidth', window.outerWidth);

let url = 'https://www.zoya.bg/',
    features = 'height=600px, width=800px'

function showNewWindow() {
    // window.open(url,windowName, [windowFeatures] )   
    window.open(url, 'zoya', features);
    // let newTab = window.open(url, 'zoya', features);
    // setTimeout(() => {
    //     newTab?.resizeTo(400, 300)
    // }, 5000)

}
let setToggleColor: number;
function toggleColorText() {
    let text: HTMLElement = document.getElementById('flash') as HTMLElement;
    text.style.color = text.style.color === 'green' ? 'yellow' : 'green';
}
function start() {
    setToggleColor = setInterval(toggleColorText, 1000)
}
function stopInterval() {
    clearInterval(setToggleColor)
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
function submitData(e: Event) {
    e.preventDefault()
    let firstName: HTMLInputElement, lastName: HTMLInputElement, userName: HTMLInputElement, password: HTMLInputElement;
    firstName = document.getElementById('firstName') as HTMLInputElement;
    lastName = document.getElementById('lastName') as HTMLInputElement;
    userName = document.getElementById('userName') as HTMLInputElement;
    password = document.getElementById('firstName') as HTMLInputElement;


    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        userName: userName.value,
        password: password.value,
    }
    localStorage.setItem('user', JSON.stringify(user))



}
let userData: string = localStorage.getItem('user') as string;
console.log(JSON.parse(userData));

let data = JSON.parse(userData) || {
    firstName: 'Mihail',
    lastName: 'Dimitrov',
    userName: 'blabla',
    password: 'blabla'
};
console.log(data.firstName);
localStorage.removeItem('user')


//COOKIES
//  name , value , domain, path, httpOnly, Secure - if checked sending data with SSL to the server 
//localstorage - 5mb , cookies - 4kb
// all cookies over 4kb  are not sending data(over 4kb) to the server 
// no sensitive data in cookies 
// cookie values can not includes  cyrilyc , empty space, and  ',.'
// expires seting value - max-age with seconds
// to get cookie we need a function

document.cookie = 'userRole= admin;max-age=' + 30 * 24 + 60 + 60;

document.cookie = 'company=' + encodeURIComponent('Коледен базар') + ";max-age=" + 30 * 24 + 60 + 60;
document.cookie = 'newState=holiday;expires= Fri, 28 Oct 2022 23:59:59;path=/about.html;domain=127.0.0.1;secure';


function getCookie(name: string) {
    // split cookie to reach all name-value pairs

    let allCookies = document.cookie.split(';')
    console.log(allCookies);

    allCookies.forEach(cookie => {
        let cookiePair = cookie.indexOf('=') > -1 ? cookie.split('=') : [cookie, ''];
        if (name === cookiePair[0].trim()) {
            console.log(decodeURIComponent(cookiePair[1].trim()));

            return decodeURIComponent(cookiePair[1].trim())
        }
    })
    // return null
}
getCookie('company')

// DELETE company Cookie

document.cookie = 'company=;max-age=0';
document.cookie = 'userRole=;expires=Fri, 28 Oct 2019 23:59:59' // not good - not all data deleted


// localstorage can only store data only on the browser , cookies are send to the server
// the user can block cookies, localstorage

// DRAG AND DROP 
// HTML5!!!
//drag start - event => drag over => event drag end
//drag enter => drag over => drag leave or drop
// data transfer object
// 24.08 and 26.08 no lections

const item = document.getElementById('item');
const boxes = document.querySelectorAll('.box');

item?.addEventListener('dragstart', dragStart);


function dragStart(e: any) {
    console.log('started');

    e.dataTransfer.setData("text/plain", e.target.id);



    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0);
    // setTimeout will start after the event
}
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);

});

function dragEnter(e: any) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}
function dragOver(e: any) {
    e.preventDefault();
    e.target.classList.add('drag-over');


}
function dragLeave(e: any) {
    e.target.classList.remove('drag-over');


}
function drop(e: any) {
    e.preventDefault(); /// not working in mozilla  without this !!!
    e.target.classList.remove('drag-over');

    let id = e.dataTransfer.getData("text/plain");
    let dragableItem = document.getElementById(id);
    console.log(id);
    console.log(dragableItem);


    e.target.appendChild(dragableItem);
    dragableItem?.classList.remove('hide');

}   