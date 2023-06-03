let colorBoxes = document.querySelectorAll(".color-box");
let red;
let blue;
let green;

function generateColors () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

colorBoxes.forEach(element => {
    element.style.background = generateColors();
})