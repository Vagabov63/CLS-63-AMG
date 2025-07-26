'use strict'

const attemptsMonitor = document.querySelector('.attemptsMonitor');
const calculator = document.querySelector('.calc');
const mathButtons = document.querySelector('.math');
const calcButtons = document.querySelectorAll('.math button');




//включает продвинутый режим
calculator.addEventListener('click', function() {
    const disp = window.getComputedStyle(mathButtons);
    if(disp.display == 'none') {
        mathButtons.style.display = 'block';
    }
    else {mathButtons.style.display = 'none'}
});

//обработка кнопок
calcButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const buttonValue = button.dataset.symbol;
        const inputPos = attemptsMonitor.selectionStart;

        attemptsMonitor.value = attemptsMonitor.value.substring(0, inputPos) + buttonValue + attemptsMonitor.value.substring(inputPos);
        attemptsMonitor.focus();
        if(buttonValue.includes('(')) {
            var text = attemptsMonitor.value;
            for(let i = inputPos; i < inputPos + 5; i++) {
                if(text[i] === '(') {
                    text = i + 1;
                    break;
                }
            }
            attemptsMonitor.setSelectionRange(text, text);
        }
        else {
            attemptsMonitor.setSelectionRange(inputPos + 1, inputPos + 1);
        }
    })
})

//синхронизация input`ов
attemptsSlider.addEventListener('input', function() {
    maxAttempts = parseInt(attemptsSlider.value);
    attemptsMonitor.value = maxAttempts;
});


//вычисления
attemptsMonitor.addEventListener('input', function() {
    let temp = 0;
    try {
        temp = this.value
            .replace(/,/g, '.')
            .replace(/×/g, '*')
            .replace(/π/g, 'Math.PI')
            .replace(/ln/g, 'Math.log10')
            .replace(/log/g, 'Math.log')
            .replace(/sin/g, 'Math.sin')
            .replace(/cos/g, 'Math.cos')
            .replace(/√/g, 'Math.sqrt');
        const calc = new Function(`return ${temp}`);
        maxAttempts = Math.round(calc());
    }
    catch(error) {}
    attemptsSlider.value = maxAttempts;
    if(isNaN(parseInt(maxAttempts))) {
        attemptsSlider.value = 0;
    }

});

