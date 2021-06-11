const spanColor = document.querySelector('#span-color');
const button = document.querySelector('#button');
const body = document.querySelector('body');
let color;

function colorChange() {
    button.addEventListener('click', () => {
        color = '#'+Math.floor(Math.random()*16777215).toString(16);
        spanColor.textContent = color;
        body.style.backgroundColor = color;
    });
}
colorChange();