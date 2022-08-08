let regex1= (/hello/gi);
let regex2 = new RegExp('hello','gi');
let text = 'Hello Vanyo, how was today. I met Pesho and said hello';


// console.log(
//     regex1.test(text)
// );

let result = [];
let match;
do {
    match= regex1.exec(text);
    if(match) result.push(match)
} while(match !== null)

console.log('result', result)




// search
result= text.match(regex1)
console.log(result);

// replace 
console.log(
    text.replace(regex1, 'Hi')
);

//+1-(408)-888-0415
text = '+1-(408)-888-0415'
regex1 = /\d/g
console.log(text.match(regex1).join(''));


//. 

regex1 = /E.6/;
text='ES6'
console.log(
    text.match(regex1)
);

text= 'Typescript is the best programming language ever typed';
regex1=/^T/;
regex2=/d$/;
console.log(
    regex1.test(text),
    regex2.test(text)
);

//20:15
regex1=/^\d\d:\d\d$/;
text='04:18'
console.log(
    text.match(regex1)
);
text ='Vanyo get up every morning on 06:15';
regex1=/\b\d\d:\d\d\b/
console.log(
    text.match(regex1)
);
text = 'Vanyo is born 1998 but Ecmascript6 is found in 2015 and ES11 is found 2020'
regex1=/\d{2,4}/g;

console.log(text.match(regex1));

text = '+1-(08)-888-0415';
regex1=/\d{3,}/g;
console.log(text.match(regex1));


// email validation
text = 'petur.petrov@advamceacademy.com'
regex1=/\b[A-Z0-9._%*+-]+@[A-Z0-9]+\.[A-Z]{2,}\b/gi;
console.log(text.match(regex1));


regex1=/^(.*)(\r?\n\1)+$/