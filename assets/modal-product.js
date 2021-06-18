function changeImage(id) {
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imagePath);
}


// Get the button that opens the modal

var btn = document.getElementsByClassName('Btn')[0];

var modal = document.getElementsByClassName('Modal')[0];

var span = document.getElementsByClassName('close-Btn')[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}