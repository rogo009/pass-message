// variables

let input = document.querySelector('input');
const button = document.querySelector('button').addEventListener('click', isEmpty);
let lastMessage = document.getElementById('lastMessage');
let error = document.getElementById('error');

// handler - see above attached handler to variable


// function

function isEmpty() {
    if (input.value === "") {
        error.textContent = "Please provide a message"; //use JS to add message to error div
        error.classList.remove('errorDisplay');
        error.classList.add('errorStyle'); // wanted to practice dynamic styling with JS instead of assigning class name to the error div then display if meets condition
        setTimeout(function() {
            error.classList.add('errorDisplay'); // not necessary but adding dynamic styling class into CSS - this actually requires more lines of code, since you have to add a CSS class to make the div disappear, vs making style display none as below
            // error.style.display = "none";
        }, 3000);
    } else {
    lastMessage.textContent = input.value;
    input.value = "";
    }
}

// function message() {
//     console.log(input.value);
//     lastMessage.textContent = input.value;
//     input.value = "";
// }