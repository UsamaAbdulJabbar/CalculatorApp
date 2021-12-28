var screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'DEL'){
            screen.value = screen.value.slice(0,-1);
        }
        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}


