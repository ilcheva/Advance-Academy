"use strict";
let sideNav = document.getElementById('sideNav');
let menuLinks = document.querySelectorAll('#sideNav nav a');
(function () {
    sideNav.style.height = '100vh';
    sideNav.style.width = '0px';
    sideNav.style.overflowX = 'hidden';
    sideNav.style.position = 'fixed';
    sideNav.style.top = '0';
    sideNav.style.left = '0';
    sideNav.style.backgroundColor = '#000';
    sideNav.style.paddingTop = '30px';
    sideNav.style.transition = '0.5s';
})();
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].style.display = 'block';
    menuLinks[i].style.fontSize = '24px';
    menuLinks[i].style.paddingLeft = '10px';
    menuLinks[i].style.lineHeight = '60px';
    menuLinks[i].style.color = '#fff';
    menuLinks[i].style.textDecoration = 'none';
    menuLinks[i].style.textTransform = 'uppercase';
}
function openSideNav() {
    // (document.getElementById('container') as HTMLElement).style.width = `calc(100%-${sideNav.style.width}`;
    if (sideNav.style.width !== '150px') {
        sideNav.style.width = '150px';
        // (document.getElementById('container') as HTMLElement).style.marginLeft = '150px';
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    }
    else {
        sideNav.style.width = '0px';
        // (document.getElementById('container') as HTMLElement).style.marginLeft = '0px';
        document.body.style.backgroundColor = '#fff';
    }
    document.getElementById('container').style.width = `calc(100% - ${sideNav.style.width})`;
    document.getElementById('container').style.marginLeft = 'auto';
}
// Declare variables we need for definin their values
let input = document.getElementById('globalSearch');
let ul = document.getElementById('addressBook');
let lis = (document.querySelectorAll('#addressBook li'));
//define all links
let links = Array.from(document.querySelectorAll('#addressBook li a'));
// innerHTML from html openning closing tag 
// textContent form zero from js created
function globalSearch() {
    // console.log(input.value.toLowerCase());
    // console.log(links);
    links.forEach((link) => {
        let textValue = link.innerHTML || link.textContent;
        textValue.toLowerCase().indexOf(input.value.toLowerCase()) > -1 ?
            link.parentElement.style.display = '' :
            link.parentElement.style.display = 'none';
    });
}
function addNewContact() {
    let li = document.createElement('li');
    let aLink = document.createElement('a');
    aLink.setAttribute('href', '#');
    aLink.setAttribute('data-toggle', "modal");
    let contactInput = document.getElementById('addNewContact');
    let content = document.createTextNode(contactInput.value);
    aLink.appendChild(content);
    li.appendChild(aLink);
    // userName.value = contactInput.value;
    content.length !== 0 ? ul.appendChild(li) : alert('You must write a name');
    contactInput.value = '';
    // create a button which deletes a created contact#
    let removeContactBtn = document.createElement('button');
    removeContactBtn.appendChild(document.createTextNode('x'));
    removeContactBtn.classList.add('removeContact', 'btn', 'btn-danger', 'm-1');
    li.appendChild(removeContactBtn);
    // fetch all buttons with class removeContact
    let removeContactBtns = Array.from(document.getElementsByClassName('removeContact'));
    removeContactBtns.forEach(button => {
        button.addEventListener('click', function () {
            this.parentElement.remove();
        });
    });
    let modal, contactName;
    modal = document.getElementById("modal");
    contactName = document.getElementById("contactName");
    let contacts = document.querySelectorAll("#addressBook li");
    console.log("contacts", contacts);
    Array.from(contacts).forEach((contact) => {
        contact.onclick = function (e) {
            let htmlEl = e.target;
            modal.style.display = "block";
            console.log(htmlEl.textContent);
            contactName.innerText = htmlEl.textContent;
        };
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    });
}
