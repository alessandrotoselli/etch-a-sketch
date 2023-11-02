const gridContainer = document.getElementById('grid-container');
const btn16 = document.getElementById('16');
const btn32 = document.getElementById('32');
const btn64 = document.getElementById('64');
const eraserBtn = document.getElementById('eraser-btn');
const pencilBtn = document.getElementById('pencil-btn');
const resetBtn = document.getElementById('reset-btn');

let gridWidth = gridContainer.offsetWidth;
let pencil = true;
let color = 'black';

let gridSize = 16;

createGrid(gridSize);

btn16.addEventListener('click', () => {
    removeGrid();
    gridSize = 16;
    createGrid(gridSize);
})

btn32.addEventListener('click', () => {
    removeGrid();
    gridSize = 32;
    createGrid(gridSize);
})

btn64.addEventListener('click', () => {
    removeGrid();
    gridSize = 64;
    createGrid(gridSize);
})

eraserBtn.addEventListener('click', () => {
    pencil = false;
})

pencilBtn.addEventListener('click', () => {
    pencil = true;
})

resetBtn.addEventListener('click', () => {
    removeGrid();
    createGrid(gridSize);
})

function createGrid(size) {
    for (i = 0; i < size; i++) {
        let cellRow = document.createElement('div');
        gridContainer.appendChild(cellRow);
            for (j = 0; j < size; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.width = (gridWidth / gridSize) + 'px';
                cell.style.height = (gridWidth / gridSize) + 'px';
                cellRow.appendChild(cell);
            }
    }
}

function removeGrid() {
    while (gridContainer.lastChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

gridContainer.addEventListener('mouseover', function (e) {
    if (pencil === true){
        e.target.classList.add('hovered-cell');
    } else {
        e.target.classList.remove('hovered-cell')
    }
})