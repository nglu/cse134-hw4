document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alert-button');
    const confirmButton = document.getElementById('confirm-button');
    const promptButton = document.getElementById('prompt-button');
    const saferButton = document.getElementById('safer-button');
    const result = document.getElementById('button-result');
    

    // alertButton.addEventListener('click', alertPressed);
    alertButton.addEventListener('click', () => {
        alert("Alert Button is pushed.");
        result.textContent = " ";
    });

    confirmButton.addEventListener('click', () => {
        result.textContent = " ";
        let button = confirm("Confirm Button is pushed. Yes or No?");
        
        if(button) {
            result.textContent = `Confirm result: ${button}`;
        }
        else {
            result.textContent = `Confirm result: ${button}`;
        }
    });

    promptButton.addEventListener('click', () => {
        let user_input = prompt("What is your name?");
        if(user_input) {
            result.textContent = `Prompt result: ${user_input}`;
        }
        else {
            result.textContent = "Prompt result: User didn't enter anything.";
        }
    });

    saferButton.addEventListener('click', () => {

    });

})

// <b onmouseover = "alert('Ehhhhh')">Roll me</b>