const griddiv = document.querySelector('.grid-container');
let gridDimensions = 16;


function makeGrid(dimensions){
    for(let i = 0; i < dimensions**2; i++){
    const div = document.createElement('div');
    let dim = (960 / dimensions) - 2;
    div.style.width = dim + 'px';
    div.style.height = dim + 'px';
    griddiv.appendChild(div);
    }
}


makeGrid(16);
