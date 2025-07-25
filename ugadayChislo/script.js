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
const settings = document.querySelector('.settings');

start.addEventListener('click', starting);

function starting() {
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.inGame').style.display = 'flex';
}
