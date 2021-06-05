// Get the button that opens the modal
let btn = document.getElementById('Btn');

let modal = document.getElementById('Modal');

let span = document.getElementsByClassName('close-Btn')[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}