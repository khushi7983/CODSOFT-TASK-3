document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = button.textContent;

            switch (buttonText) {
                case 'AC':
                    display.value = '';
                    break;
                case 'DEL':
                    display.value = display.value.slice(0, -1);
                    break;
                case '+/-':
                    display.value = eval(display.value) * -1;
                    break;
                case '=':
                    display.value = eval(display.value);
                    break;
                default:
                    display.value += buttonText;
                    break;
            }
        });
    });
});