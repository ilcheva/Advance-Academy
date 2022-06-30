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

/// FORM EVENTS 