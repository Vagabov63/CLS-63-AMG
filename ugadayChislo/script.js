'use strict'

// querySelector
// querySelectorAll
// getElementById
// getElementByClassName
// getElementByTagName
// createElement('html')

// children
// lastChild
// firstChild
// parentNode
// nextElementSibling
// previousElementSibling

// innerHTML
// textContent
// incertAdjasentElement('position', element)
// insertAdjasentHTML('position', `HTML`)

// getAttribute, setAttribute, hasAttribute, removeAttribute, toggle
// console.log(element.dataSet);
// кастомные атрибуты выставлять с припиской data-

// elem.style.cssText = `
//     css for element;
// `

// elem.style.свойство = 'значение'
// elem.style.backgroundColor = 'red'

//removeEventListener('action', function)

//tagName

// click, input, scroll, keydown, resize, mouseenter, mouseleave

const start = document.querySelector('.start');
const settingsBtn = document.querySelector('.settingsBtn');
const back = document.querySelectorAll('.back');
const menu = document.querySelector('.menu');
const inGame = document.querySelector('.inGame');
const settings = document.querySelector('.settings');

start.addEventListener('click', () => {openTab(inGame)});

settingsBtn.addEventListener('click', () => {openTab(settings)});

back.forEach(btn => {
    btn.addEventListener('click', backToMenu);
});


function backToMenu() {
    inGame.style.display = 'none';
    settings.style.display = 'none';
    menu.style.display = 'flex';

}

function openTab(tabName) {
    menu.style.display = 'none';
    tabName.style.display = 'flex';
}