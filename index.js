// get all the references
let header = document.getElementById("header");
let showButton = document.getElementById("showButton");
let hideButton = document.getElementById("hideButton");

// add an event listener
showButton.addEventListener('click', () => {
    header.classList.add('show');
    header.classList.remove('hide');
});

hideButton.addEventListener('click', () => {
    header.classList.remove('show');
    header.classList.add('hide');
})