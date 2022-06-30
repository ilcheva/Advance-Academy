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
let clock: HTMLElement = document.getElementById('clock') as HTMLElement;
function showCLock() {
    let now = new Date();
    clock.innerText = now.toLocaleTimeString();
}
// setInterval(showCLock, 1000);
//counter backward
// time level 30 mins -> 
// to do 
let timer = (22 * 60 * 1000) / 2;
let x = setInterval(countDownTimer, 1000)
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
    } else {
        clock.innerHTML = `${minutes} : ${seconds}`;
    }
    if (seconds < 10) {
        clock.innerHTML = `${minutes} : 0${seconds}`;
    } else {
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
enum ZOMBIE_TYPE {
    MALE,
    FEMALE,
    BOY,
    GIRL,
    BABY,
    GRANDMOTHER,
    GRANDFATHER
}

interface Zombie {
    name: string;
    dna: string;
    zombieEnergy: number;
    skinColor: string;
    eyeColor: string;
    eyeDamage: boolean;
    armCount: number;
    hairColor: string;
    zombieGender: 'male' | 'female' | 'gender';
    zombieType: ZOMBIE_TYPE;
    zombieMovementSpeed: number;
    isZombieInfective: boolean;
    //zombieBoss
}

let defaultZombieDNA: string = '1234567890111213';
let symbols: string[] = [];
// do {
//     symbols.push(defaultZombieDNA)
// }
