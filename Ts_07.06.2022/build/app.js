"use strict";
//Write an if statement that examines two integer variables and exchanges their values if the first one is greater than the second one. 
function exchange(a, b) {
    if (a > b) {
        [a, b] = [b, a];
        console.log(a, b);
    }
    else
        return console.log(a, b);
}
exchange(10, 5);
//Write a script that shows the sign (+ or -) of the product of three real numbers without calculating it. 
function positiveNegativeProduct(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        console.log('zero');
    }
    else if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                console.log('+');
            }
            else if (c < 0)
                console.log('-');
        }
        else if (b < 0) {
            if (c > 0) {
                console.log('-');
            }
            else if (c < 0)
                console.log('+');
        }
    }
    else if (a < 0) {
        if (b > 0) {
            if (c > 0) {
                console.log('-');
            }
            else if (c < 0)
                console.log('+');
        }
        else if (b < 0) {
            if (c > 0) {
                console.log('+');
            }
            else if (c < 0)
                console.log('-');
        }
    }
}
positiveNegativeProduct(2, -1, -5);
//Use a sequence of if statements. Write a script that finds the biggest of three integers using nested if statements.
function biggestInt(a, b, c) {
    if (a >= b) {
        if (a >= c)
            console.log(a);
        else if (a < c)
            console.log(c);
    }
    else if (a < b) {
        if (b >= c)
            console.log(b);
        else if (b < c)
            console.log(c);
    }
}
biggestInt(4, 6, 6);
// Sort 3 real values in descending order using nested if statements.
function sortedNumDesc(a, b, c) {
    if (a < b) {
        if (b < c)
            console.log(c, b, a);
        else if (a < c)
            console.log(b, c, a);
        else
            console.log(b, a, c);
    }
    else if (c < a) {
        if (b < c)
            console.log(a, c, b);
        else
            console.log(a, b, c);
    }
    else {
        console.log(c, a, b);
    }
}
sortedNumDesc(50, 10, 60);
//Write script that asks for a digit and depending on the input shows the name of that digit (in English) using a switch statement.
function digitName(a) {
    switch (a) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('one');
            break;
        case 2:
            console.log('two');
            break;
        case 3:
            console.log('tree');
            break;
        case 4:
            console.log('four');
            break;
        case 5:
            console.log('five');
            break;
        case 6:
            console.log('six');
            break;
        case 7:
            console.log('seven');
            break;
        case 8:
            console.log('eight');
            break;
        case 9:
            console.log('nine');
            break;
        default:
            console.log('not a digit');
            break;
    }
}
digitName(5);
// Write a script that enters the coefficients a, b and c of a quadratic equation ( ax2 + bx + c = 0 ) and
// calculates and prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots.
function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - (4 * (a * c));
    if (a !== 0) {
        if (d > 0) {
            let root1 = (-(b) + Math.sqrt(d)) / (2 * a);
            let root2 = (-(b) - Math.sqrt(d)) / (2 * a);
            console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
        }
        else if (d = 0) {
            let root1 = -(b / (2 * a));
            console.log(`The root of the quadratic equation is ${root1}`);
        }
        else if (d < 0) {
            console.log('There are 0 real roots');
        }
    }
    else
        console.log('There are no real roots');
}
quadraticEquation(5, 3, -4);
// Write a script that finds the greatest of given 5 variables.
function greatestNum(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e)
        console.log(a);
    if (b > a && b > c && b > d && b > e)
        console.log(b);
    if (c > a && c > b && c > d && a > e)
        console.log(c);
    if (d > a && d > b && d > c && d > e)
        console.log(d);
    if (e > a && e > b && e > c && e > d)
        console.log(e);
    // or Math.max(a,b,c,d,e)
}
console.log(greatestNum(5, 6, 9, 123, 666));
//Write a script that converts a number in the range [0...999] to a text corresponding to its English pronunciation.
function numberToString(a) {
    let s = (a % 10);
    let d = Math.floor((a / 10) % 10);
    let h = Math.floor((a / 100) % 10);
    let t = a.toString().slice(1, 3);
    let result = '';
    let dText = '';
    let sText = '';
    var text = "The english word for the given number is:";
    if (a > 999) {
        result = "Please enter a maximum 3 digit number!";
    }
    else if (a <= 999) {
        if (h > 0) {
            switch (h) {
                case 1:
                    result += "One hundred";
                    break;
                case 2:
                    result += "Two hundred";
                    break;
                case 3:
                    result += "Three hundred";
                    break;
                case 4:
                    result += "Four hundred";
                    break;
                case 5:
                    result += "Five hundred";
                    break;
                case 6:
                    result += "Six hundred";
                    break;
                case 7:
                    result += "Seven hundred";
                    break;
                case 8:
                    result += "Eight hundred";
                    break;
                case 9:
                    result += "Nine hundred";
                    break;
                default: result += "";
            }
            if (d > 1) {
                switch (d) {
                    case 2:
                        dText = "twenty";
                        break;
                    case 3:
                        dText = "thrirty";
                        break;
                    case 4:
                        dText = "fourty";
                        break;
                    case 5:
                        dText = "fifty";
                        break;
                    case 6:
                        dText = "sixty";
                        break;
                    case 7:
                        dText = "seventy";
                        break;
                    case 8:
                        dText = "eighty";
                        break;
                    case 9:
                        dText = "ninety";
                        break;
                    default: dText = " ";
                }
                switch (s) {
                    case 1:
                        sText = "one";
                        break;
                    case 2:
                        sText = "two";
                        break;
                    case 3:
                        sText = "three";
                        break;
                    case 4:
                        sText = "four";
                        break;
                    case 5:
                        sText = "five";
                        break;
                    case 6:
                        sText = "six";
                        break;
                    case 7:
                        sText = "seven";
                        break;
                    case 8:
                        sText = "eight";
                        break;
                    case 9:
                        sText = "nine";
                        break;
                    default: sText = " ";
                }
                console.log(`${text} ${result} and ${dText} and ${sText}`);
            }
            else if (d = 1) {
                switch (parseInt(t)) {
                    case 11:
                        t = "eleven";
                        break;
                    case 12:
                        t = "twelve";
                        break;
                    case 13:
                        t = "thrirteen";
                        break;
                    case 14:
                        t = "fourteen";
                        break;
                    case 15:
                        t = "fifteen";
                        break;
                    case 16:
                        t = "sixteen";
                        break;
                    case 17:
                        t = "seventeen";
                        break;
                    case 18:
                        t = "eighteen";
                        break;
                    case 19:
                        t = "nineteen";
                        break;
                }
                console.log(`${text} ${result} and ${t}`);
            }
        }
        else if (h === 0) {
            if (d > 1) {
                switch (d) {
                    case 2:
                        dText = "twenty";
                        break;
                    case 3:
                        dText = "thrirty";
                        break;
                    case 4:
                        dText = "fourty";
                        break;
                    case 5:
                        dText = "fifty";
                        break;
                    case 6:
                        dText = "sixty";
                        break;
                    case 7:
                        dText = "seventy";
                        break;
                    case 8:
                        dText = "eightty";
                        break;
                    case 9:
                        dText = "ninety";
                        break;
                    default: dText = " ";
                }
                switch (s) {
                    case 1:
                        sText = "one";
                        break;
                    case 2:
                        sText = "two";
                        break;
                    case 3:
                        sText = "three";
                        break;
                    case 4:
                        sText = "four";
                        break;
                    case 5:
                        sText = "five";
                        break;
                    case 6:
                        sText = "six";
                        break;
                    case 7:
                        sText = "seven";
                        break;
                    case 8:
                        sText = "eight";
                        break;
                    case 9:
                        sText = "nine";
                        break;
                    default: sText = " ";
                }
                console.log(`${text} ${dText} and ${sText}`);
            }
            else if (d = 1) {
                switch (a) {
                    case 11:
                        t = "eleven";
                        break;
                    case 12:
                        t = "twelve";
                        break;
                    case 13:
                        t = "thrirteen";
                        break;
                    case 14:
                        t = "fourteen";
                        break;
                    case 15:
                        t = "fifteen";
                        break;
                    case 16:
                        t = "sixteen";
                        break;
                    case 17:
                        t = "seventeen";
                        break;
                    case 18:
                        t = "eighteen";
                        break;
                    case 19:
                        t = "nineteen";
                        break;
                }
                console.log(`${text} ${t}`);
            }
        }
    }
}
numberToString(22);
