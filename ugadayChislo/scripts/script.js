'use strict'

const start = document.querySelector('.start');
const settingsBtn = document.querySelector('.settingsBtn');
const back = document.querySelectorAll('.back');
const clear = document.querySelectorAll('.clear');
const menu = document.querySelector('.menu');
const inGame = document.querySelector('.inGame');
const settings = document.querySelector('.settings');
const attemptsSlider = document.querySelector('.attemptsSlider');



let maxAttempts = 3;

start.addEventListener('click', () => openTab(inGame));

settingsBtn.addEventListener('click', () => openTab(settings));

back.forEach(btn => {
    btn.addEventListener('click', backToMenu);
});

clear.addEventListener('click', () => {
    
})


function backToMenu() {
    inGame.style.display = 'none';
    settings.style.display = 'none';
    menu.style.display = 'flex';
}

function openTab(tabName) {
    menu.style.display = 'none';
    tabName.style.display = 'flex';
}





