const griddiv = document.querySelector('.grid-container');
const resize = document.querySelector('#resize-button');
const erase = document.querySelector('#erase-button');
const rainbow = document.querySelector('#rainbow-button')
let gridDimensions = 16;
let randomColorActive = false;

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}


function makeGrid(dimensions){
    for(let i = 0; i < dimensions**2; i++){
    const div = document.createElement('div');
    div.classList.add('grid-div')
    let dim = (960 / dimensions) - 2;
    div.style.width = dim + 'px';
    div.style.height = dim + 'px';
    div.addEventListener('mouseover', function(){
        if(randomColorActive){
            div.style.backgroundColor = randomColor();
        }
        else{
            div.style.backgroundColor = 'black';
        }
    })
    griddiv.appendChild(div);
    }
}

let input = 0;
resize.addEventListener('click', function() {
    do{
        input = prompt('Please enter a value between 16 and 100:', 16);
    } while(isNaN(input) || input > 100 || input < 16)
    removeChildren(griddiv);
    makeGrid(input);
});

erase.addEventListener('click', function(){
    const grid = document.querySelectorAll('.grid-div')
    grid.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
});

rainbow.addEventListener('click', function(){
    randomColorActive = !randomColorActive;
    const grid = document.querySelectorAll('.grid-div')
    grid.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
});


makeGrid(16);
