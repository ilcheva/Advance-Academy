"use strict";
var _a, _b, _c, _d, _e;
function greeting(name) {
    let userName = document.getElementById('userName').innerHTML = `Hello ${name}.How are you today?`;
}
//MOUSE EVENT 
// click, contextmenu(click right button), mouseover,  mouseleave
//contextmenu
(_a = document.getElementById('context')) === null || _a === void 0 ? void 0 : _a.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('hi');
});
// mouseover
(_b = document.getElementById('userName')) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.style.fontSize = '3rem';
});
(_c = document.getElementById('userName')) === null || _c === void 0 ? void 0 : _c.addEventListener('mouseleave', (e) => {
    let target = e.target;
    target.style.fontSize = 'unset';
});
//keyboard  => keyup, onKeypress, onKeyDown, 
(_d = document.querySelector('[type="text"]')) === null || _d === void 0 ? void 0 : _d.addEventListener('keyup', (e) => {
    let value = e.target.value;
    if (value !== 'Silviya') {
        document.querySelector("[type='text'] ~ small").innerHTML = 'You must write Silviya';
    }
    else {
        document.querySelector("[type='text'] ~ small").innerHTML = '';
    }
});
// document.querySelector("textarea")?.addEventListener('keyup', (e: Event) => {
//     let value = (e.target as HTMLTextAreaElement).value
//     if (value !== 'text') {
//         (document.querySelectorAll("small")[1] as HTMLElement).innerHTML = 'You must write text';
//     } else {
//         (document.querySelectorAll("small")[1] as HTMLElement).innerHTML = '';
//     }
// })
(_e = document.querySelector("#comment")) === null || _e === void 0 ? void 0 : _e.addEventListener('keypress', (e) => {
    let target = e.target;
    (target.value.length < 10)
        ? document.querySelector("#comment ~ small").innerHTML = ''
        : document.querySelector("#comment ~ small").innerHTML = 'Your comment can\'t be more than ten symbols';
});
/// FORM EVENTS 
