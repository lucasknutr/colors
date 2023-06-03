let colorBoxes = document.querySelectorAll(".color-box");
let rgbTextDisplay = document.getElementById("rgb");

function generateColors () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// colorBoxes.forEach(element => {
//     element.style.background = generateColors();
// })

function generateBackground () {
    for (i = 0; i < 9; i++) {
        colorBoxes[i].style.background = generateColors();
    }
}

function sortNumber () {
    let number = Math.floor(Math.random() * 9);
    return number;
}


generateBackground();
let number = sortNumber();

rgbTextDisplay.textContent = colorBoxes[number].style.background;

colorBoxes.forEach(element => {
    element.addEventListener("click", function () {
        if (element.style.background === colorBoxes[number].style.background) {
            alert("YOU WIN!");
            generateBackground();
            sortNumber();

        }

        else {
            alert("NOPE!");
            element.style.background = "white";
        }
    })
})

