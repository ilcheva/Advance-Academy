"use strict";
//timer
//Date
// js counts days from sunday and from 0
// let now = new Date();
// let endDay = new Date('2022-06-17');
// let time = now.toLocaleTimeString();
// console.log(time);
// console.log(now.getDate());
// if (now.getDay() == 5) {
//     alert('Yupii');
// }
let clock = document.getElementById('clock');
function showCLock() {
    let now = new Date();
    clock.innerText = now.toLocaleTimeString();
}
// setInterval(showCLock, 1000);
//counter backward
// time level 30 mins -> 
// to do 
let timer = (22 * 60 * 1000) / 2;
let x = setInterval(countDownTimer, 1000);
let countDownDate = new Date().getTime();
countDownDate += timer;
function countDownTimer() {
    let now = new Date().getTime();
    let diff = countDownDate - now;
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (minutes < 10) {
        clock.innerHTML = `0${minutes} : ${seconds}`;
        if (seconds < 10) {
            clock.innerHTML = `0${minutes} : 0${seconds}`;
        }
        else {
            clock.innerHTML = `0${minutes} : ${seconds}`;
        }
    }
    else {
        clock.innerHTML = `${minutes} : ${seconds}`;
    }
    if (seconds < 10) {
        clock.innerHTML = `${minutes} : 0${seconds}`;
    }
    else {
        clock.innerHTML = `${minutes} : ${seconds}`;
    }
    if (diff < 0) {
        clearInterval(x);
        clock.innerHTML = "EXPIRED";
    }
}
// let timeLevel = (60 * 60 * 1000) / 2; // in ms
// console.log(timeLevel);
// console.log(timeStamp);
// for (let i = timeLevel; i > 0; i--) {
// console.log(new Date(i));
// }
// Zombie Structure
var ZOMBIE_TYPE;
(function (ZOMBIE_TYPE) {
    ZOMBIE_TYPE[ZOMBIE_TYPE["MALE"] = 0] = "MALE";
    ZOMBIE_TYPE[ZOMBIE_TYPE["FEMALE"] = 1] = "FEMALE";
    ZOMBIE_TYPE[ZOMBIE_TYPE["BOY"] = 2] = "BOY";
    ZOMBIE_TYPE[ZOMBIE_TYPE["GIRL"] = 3] = "GIRL";
    ZOMBIE_TYPE[ZOMBIE_TYPE["BABY"] = 4] = "BABY";
    ZOMBIE_TYPE[ZOMBIE_TYPE["GRANDMOTHER"] = 5] = "GRANDMOTHER";
    ZOMBIE_TYPE[ZOMBIE_TYPE["GRANDFATHER"] = 6] = "GRANDFATHER";
})(ZOMBIE_TYPE || (ZOMBIE_TYPE = {}));
let defaultZombieDNA = '1234567890111213';
let symbols = [];
// do {
//     symbols.push(defaultZombieDNA)
// }
