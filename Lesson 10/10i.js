var calculation = '';
    function updateCalculation(add) {
        
        var dispay = document.querySelector('.textOutput')
        dispay.textContent += add;
        calculation += add;
    }

    function result() {
        var dispay = document.querySelector('.textOutput')
        dispay.textContent = eval(calculation);
        localStorage.setItem(calculation, eval(calculation));
    }

    function clearText() {
        var display = document.querySelector('.textOutput')
        calculation = '';
        display.textContent = '';
    }