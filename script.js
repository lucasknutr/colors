let colorBoxes = document.querySelectorAll(".color-box");
let rgbTextDisplay = document.getElementById("rgb");
let r ;
let g;
let b;

const randomizeColors = () => {
    r = [];
    g = [];
    b = [];
    for (i = 0; i < 9; i++){
        r.push(Math.floor(Math.random() * 256))
    }
    for (i = 0; i < 9; i++){
        g.push(Math.floor(Math.random() * 256))
    }
    for (i = 0; i < 9; i++){
        b.push(Math.floor(Math.random() * 256))
    }
}

randomizeColors();

// Generates random RGB values \ Gera valores RGB aleatórios

const generateColors = (r, g, b) => {
    return `rgb(${r}, ${g}, ${b})`;
}




// Inputs the random rgb values in each background of the circles \ coloca cor no background de cada um dos círculos

const generateBackground = () => {
    for (i = 0; i < 9; i++) {
        colorBoxes[i].style.background = generateColors(r[i], g[i], b[i]);
    }
}

// Sorts number from 0 to 8, will be used to determine which circle is the correct one
// Sorteia um número de 0 a 8, será utilizado como valor da array correta

function sortNumber () {
    let number = Math.floor(Math.random() * 9);
    return number;
}


generateBackground();
let number = sortNumber();

rgbTextDisplay.textContent = colorBoxes[number].style.background;
let info = rgbTextDisplay.textContent;

colorBoxes.forEach(element => {
    element.addEventListener("click", function () {
        if (element.style.background === colorBoxes[number].style.background) {
            alert("YOU WIN!");

            randomizeColors();
            
            generateBackground();
            
            
            sortNumber();
            rgbTextDisplay.textContent = colorBoxes[number].style.background;
        }

        else {
            alert("NOPE!");
            element.style.background = "white";
        }
    })
})

