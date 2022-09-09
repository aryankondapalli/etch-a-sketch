const griddiv = document.querySelector('.grid-container');
const resize = document.querySelector('#resize-button');
const erase = document.querySelector('#erase-button')
let gridDimensions = 16;

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function makeGrid(dimensions){
    for(let i = 0; i < dimensions**2; i++){
    const div = document.createElement('div');
    div.classList.add('grid-div')
    let dim = (960 / dimensions) - 2;
    div.style.width = dim + 'px';
    div.style.height = dim + 'px';
    div.addEventListener('mouseover', function(){
        div.style.backgroundColor = 'black';
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


makeGrid(16);
