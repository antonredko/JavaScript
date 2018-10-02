var red = document.getElementById('redBtn'),
    blue = document.getElementById('blueBtn'),
    green = document.getElementById('greenBtn');

red.addEventListener('click', changeColorRed);
blue.addEventListener('click', changeColorBlue);
green.addEventListener('click', changeColorGreen);

function changeColorRed() {
    document.body.style.backgroundColor = red.value;
    //red.removeAttribute('value');
}

function changeColorBlue() {
    document.body.style.backgroundColor = blue.value;
    //blue.removeAttribute('value');
}

function changeColorGreen() {
    document.body.style.backgroundColor = green.value;
    //green.removeAttribute('value');
}
