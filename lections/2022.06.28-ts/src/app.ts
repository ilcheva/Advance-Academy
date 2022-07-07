function greeting(name: string) {
    let userName = (document.getElementById('userName') as HTMLElement).innerHTML = `Hello ${name}.How are you today?`;
}
//MOUSE EVENT 
// click, contextmenu(click right button), mouseover,  mouseleave

//contextmenu

document.getElementById('context')?.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    alert('hi')
});

// mouseover
document.getElementById('userName')?.addEventListener('mouseover', (e: Event) => {
    let target = e.target as HTMLElement;
    target.style.fontSize = '3rem';

});
document.getElementById('userName')?.addEventListener('mouseleave', (e: Event) => {
    let target = e.target as HTMLElement;
    target.style.fontSize = 'unset';

});

//keyboard  => keyup, onKeypress, onKeyDown, 

document.querySelector('[type="text"]')?.addEventListener('keyup', (e: Event) => {
    let value = (e.target as HTMLTextAreaElement).value
    if (value !== 'Silviya') {
        (document.querySelector("[type='text'] ~ small") as HTMLElement).innerHTML = 'You must write Silviya';
    } else {
        (document.querySelector("[type='text'] ~ small") as HTMLElement).innerHTML = '';
    }
})
// document.querySelector("textarea")?.addEventListener('keyup', (e: Event) => {
//     let value = (e.target as HTMLTextAreaElement).value
//     if (value !== 'text') {
//         (document.querySelectorAll("small")[1] as HTMLElement).innerHTML = 'You must write text';
//     } else {
//         (document.querySelectorAll("small")[1] as HTMLElement).innerHTML = '';
//     }
// })

document.querySelector("#comment")?.addEventListener('keypress', (e: Event) => {
    let target = (e.target as HTMLInputElement);
    (target.value.length < 10)
        ? (document.querySelector("#comment ~ small") as HTMLElement).innerHTML = ''
        : (document.querySelector("#comment ~ small") as HTMLElement).innerHTML = 'Your comment can\'t be more than ten symbols'
})

/// FORM EVENTS  ==> blur, change, submit, focus
// change only for selectors

let form = document.querySelector("[name='testForm']")
let sameNames = Array.from(document.getElementsByTagName('testPassword'));
//аупционно число?
// sameNames[0].addEventListener('blur', (e) => {
//     let target = e.target as HTMLInputElement;
//     (document.querySelector('form + p') as HTMLElement).innerHTML = target.value;
// })

function getSelectedValue(el: HTMLSelectElement) {
    alert(el.value)
}
//DOM

// (document.querySelector('.list') as HTMLElement).style.backgroundColor = 'red';
// (document.querySelector('.list') as HTMLElement).style.opacity = '0.5';

Array.from(document.querySelectorAll(".list")).forEach((el: any) => {
    el.style.backgroundColor = 'rgba(112,111,233,0.5)';


});
(document.querySelector('.list .paragraph:nth-of-type(4)') as HTMLElement).style.color = 'blue';


/// втори и предпоследен различен текст 