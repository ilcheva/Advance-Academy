"use strict";
//Write a function that formats a string using placeholders: let str = stringFormat("Hello {0}!","Peter"); str = "Hello Andrew!";
// The function should work with up to 30 placeholders and all types
// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search). 
//(perform case insensitive search). //
function subString(text, sub) {
}
//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
//and extracts from it the [protocol], [server] and [resource] elements.
//Write a function that replaces non breaking white-spaces in a text with &nbsp;
function nonBreackingWhiteSpace(text) {
    let regEx = /\u00a0/g; // /S+/g
    let matches = text.replace(regEx, '&nbsp');
    // matches.replace(regEx,'&nbsp');
    return matches;
}
console.log(nonBreackingWhiteSpace('Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua UtEnim Ad Minim Veniam Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat Duis Aute'));
// Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time 
//Write a script that finds the max and min number from a sequence of numbers. 
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
