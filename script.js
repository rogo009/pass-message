// variables

let input = document.querySelector('input');
const button = document.querySelector('button');
let lastMessage = document.getElementById('lastMessage');
let error = document.getElementById('error');

// handler

button.addEventListener('click', yuck);

// function

function yuck() {
    isEmpty();
    message();
}

function isEmpty() {
    if (input.value === "") {
        error.textContent = "Please type a message in the input field";
        setTimeout(function() {
            error.style.display = "none";
        }, 4000);
    }
}



function message() {
    console.log(input.value);
    lastMessage.textContent = input.value;
    input.value = "";
}

// setTimeout(function(){
//     error.textContent = "Error";
// }, 2000);