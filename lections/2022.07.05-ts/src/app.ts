
let sideNav: HTMLElement = (document as Document).getElementById('sideNav') as HTMLElement;
let menuLinks: NodeListOf<HTMLElement> = (document as Document).querySelectorAll('#sideNav nav a');

(function () {
    sideNav.style.height = '100vh';
    sideNav.style.width = '0px';
    sideNav.style.overflowX = 'hidden';
    sideNav.style.position = 'fixed';
    sideNav.style.top = '0';
    sideNav.style.left = '0';
    sideNav.style.backgroundColor = '#000';
    sideNav.style.paddingTop = '30px';
    sideNav.style.transition = '0.5s'
})()

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].style.display = 'block';
    menuLinks[i].style.fontSize = '24px';
    menuLinks[i].style.paddingLeft = '10px';

    menuLinks[i].style.lineHeight = '60px';
    menuLinks[i].style.color = '#fff';
    menuLinks[i].style.textDecoration = 'none';
    menuLinks[i].style.textTransform = 'uppercase'
}

function openSideNav() {
    // (document.getElementById('container') as HTMLElement).style.width = `calc(100%-${sideNav.style.width}`;

    if (sideNav.style.width !== '150px') {
        sideNav.style.width = '150px';
        // (document.getElementById('container') as HTMLElement).style.marginLeft = '150px';
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    } else {
        sideNav.style.width = '0px';
        // (document.getElementById('container') as HTMLElement).style.marginLeft = '0px';
        document.body.style.backgroundColor = '#fff';
    }
    (document.getElementById('container') as HTMLElement).style.width = `calc(100% - ${sideNav.style.width})`;
    (document.getElementById('container') as HTMLElement).style.marginLeft = 'auto';


}
// Declare variables we need for definin their values

let input = (document.getElementById('globalSearch') as HTMLInputElement);
let ul = (document.getElementById('addressBook') as HTMLElement);
let lis = (document.querySelectorAll('#addressBook li'))
//define all links
let links = Array.from(document.querySelectorAll('#addressBook li a'))
// innerHTML from html openning closing tag 
// textContent form zero from js created

function globalSearch() {
    console.log(input.value.toLowerCase());
    console.log(links);

    links.forEach((link) => {
        let textValue = link.innerHTML || link.textContent;
      

        (textValue as string).toLowerCase().indexOf(input.value.toLowerCase() as string) > -1 ?
            (link.parentElement as HTMLElement).style.display = '' :
            (link.parentElement as HTMLElement).style.display = 'none';

    })
}