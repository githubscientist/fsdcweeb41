let switchButton = document.getElementById("switchButton");
document.body.style.height = '100vh';
// switchButton.style.padding = '50px';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';

switchButton.setAttribute("style", "padding: 50px; font-size:24px; color: red");


switchButton.addEventListener('click', () => {
    let colors = ['green', 'yellow', 'red', 'black', 'orange', 'brown', 'blue', 'gray'];

    document.body.style.backgroundColor = colors[(Math.floor(Math.random() * 10)) % colors.length];
}); 