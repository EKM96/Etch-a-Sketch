let squaresPerSide = 9;

createGrid();
addClickEvent();

function createGrid () {
    createRows();
    addSquares();
}

function createRows() {
    const container = document.querySelector(".js-container");
    let row;

    for (let i = 1; i <= squaresPerSide; i++) {
        row = document.createElement('div');
        row.classList.add(`js-row`, 'grid-rows');
        row.style.height = `${calculateSquareSize()}%`;
        container.appendChild(row);
    }
}

function addSquares() {
    const rows = document.querySelectorAll('.js-row');
    let square;

    rows.forEach((row) => {
        
        for (let i = 1; i <= squaresPerSide; i++) {
            square = document.createElement('div');
            square.classList.add('js-squares');
            square.style.width = `${calculateSquareSize()}%`;
            square.style.backgroundColor = 'white';
            row.appendChild(square);
        }
    });    
}

function randomColor() {
    const PINK = '#ff01af';
    const PURPLE = '#800080';
    const colors = [PURPLE, PINK];
    let randomColor;
    
    randomColor = colors[Math.floor(Math.random()*colors.length)];
    return randomColor;
}

function addClickEvent() {
    const squares = document.querySelectorAll('.js-squares');

    squares.forEach((square) => {
        
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    });
}

function calculateSquareSize () {
    return (85 / squaresPerSide);
}


