//Write a function that formats a string using placeholders: let str = stringFormat("Hello {0}!","Peter"); str = "Hello Andrew!";
// The function should work with up to 30 placeholders and all types
// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search). 
//(perform case insensitive search). //
function subString(text: string, sub: string) {

}
//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
//and extracts from it the [protocol], [server] and [resource] elements.
//Write a function that replaces non breaking white-spaces in a text with &nbsp;
// Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time 
//Write a script that finds the max and min number from a sequence of numbers. 

//2. Write an expression that checks if given integer is odd or even. 
function oddOrEven(ing: number) {
    if (ing % 2 === 0) {
        return `${ing} is even`;
    } else if (ing % 2 !== 0) {
        return `${ing} is odd`;
    }
}
console.log(oddOrEven(4));

//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
function divisibleByFiveorSeven(ing: number) {
    if (ing % 5 === 0) {
        if (ing % 7 === 0) return true;
    } else return false;

}

// Write an expression that calculates rectangle’s area by given width and height.
function rectangleArea(w:number,h:number){
    return (w/2)*h;
}
// Write an expression that calculates trapezoid's area by given sides a and b and height h var a = 6; var b = 2.0; var h = 15;
