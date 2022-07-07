"use strict";
//Write a function that formats a string using placeholders: 
//let str = stringFormat("Hello {0}!","Peter"); str = "Hello Andrew!";
// The function should work with up to 30 placeholders and all types
function stringFormat(text, value) {
    // let str = `{0}`;
    let strForReplace = text.split(' ')[1];
    if (value.length > 30) {
        return 'too many placeholders';
    }
    return `${text.replace(strForReplace, value)}!`;
    return `${text} ${value}`;
}
stringFormat("Hello {0}!", "Peter");
console.log(stringFormat("Hello {0}!", 10));
///Идеята е да имаш една променлива примерно string = която да ти съдържа placeholder - те, тази променлива 
//я подавш към функцията и вече като отделни параметри в самата функция подаваш думите, които да се заместят в текста.
// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search). 
//(perform case insensitive search). //
function subString(text, sub) {
    var _a;
    let regEx = new RegExp(sub, 'gi');
    return (_a = text.match(regEx)) === null || _a === void 0 ? void 0 : _a.length;
}
console.log(subString('heblabla black sheep.He is here', 'he'));
//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource]
// and extracts from it the [protocol], [server] and [resource] elements.
function urlParser(protocol, server, resource) {
    let urlStrings = [];
    for (const el of protocol) {
        for (const serv of server) {
            for (const res of resource) {
                let url = `${el}://${serv}/${res}`;
                urlStrings.push(url);
            }
        }
    }
    return urlStrings;
}
console.log(urlParser(['http', 'https'], ['192.168.0.1', 'localhost'], ['index.html', 'page.html']));
//Write a function that replaces non breaking white-spaces in a text with &nbsp;
function nonBreackingWhiteSpace(text) {
    let regEx = /\s+/g;
    // let unicodeRegEx = /\u{00a0}/g
    return text.replace(regEx, '&nbsp');
}
console.log(nonBreackingWhiteSpace('Lorem Ipsum Dolor Sit Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat Duis Aute'));
// Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time 
function allNumbers(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            continue;
        }
        // console.log(i);
    }
}
console.log(allNumbers(22));
//Write a script that finds the max and min number from a sequence of numbers. 
function maxMinNumber(n) {
    let max = Math.max(...n);
    let min = Math.min(...n);
    return `The max number is: ${max}, the min number is: ${min}`;
}
console.log(maxMinNumber([12, 15, 16, 19, 19, 2358, 1]));
//2. Write an expression that checks if given integer is odd or even. 
function oddOrEven(ing) {
    if (ing % 2 === 0) {
        return `${ing} is even`;
    }
    else if (ing % 2 !== 0) {
        return `${ing} is odd`;
    }
}
console.log(oddOrEven(8));
//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
function divisibleByFiveOrSeven(ing) {
    if (ing % 5 === 0) {
        if (ing % 7 === 0)
            return true;
        else
            return false;
    }
    else
        return false;
}
console.log(divisibleByFiveOrSeven(35));
// Write an expression that calculates rectangle’s area by given width and height.
function rectangleArea(w, h) {
    return (w / 2) * h;
}
console.log(rectangleArea(10, 6));
// Write an expression that calculates trapezoid's area by given sides a and b and height h var a = 6; var b = 2.0; var h = 15;
function trapezoidArea(a, b, h) {
    return ((a + b) * h) / 2;
}
console.log(trapezoidArea(6, 2, 15));
