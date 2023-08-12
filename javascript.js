let squaresPerSide = 20;

createGrid();
addClickEvent();

function createGrid () {
    createRows();
    createSquares();
}

function createRows() {
    const rowsArray = [];
    const container = document.querySelector(".js-container");

    for (let i = 1; i <= squaresPerSide; i++) {
        rowsArray[i] = document.createElement('div');
        rowsArray[i].classList.add(`js-row${i}`, 'rows');
        rowsArray[i].style.height = `${calcSquareSize()}%`;
        container.appendChild(rowsArray[i]);
    }
}

function createSquares() {
    let numberOfRows = squaresPerSide;
    let rowSelector;
    const squaresArray = [];
    
    for (let i = 1; i <= numberOfRows; i++) {
        rowSelector = document.querySelector(`.js-row${i}`);
        
        for (let j = 1; j <= squaresPerSide; j++) {
            squaresArray[j] = document.createElement('div');
            squaresArray[j].classList.add('js-squares');
            squaresArray[j].style.width = `${calcSquareSize()}%`;
            squaresArray[j].style.backgroundColor = 'white';
            rowSelector.appendChild(squaresArray[j]);
        }
    }
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

function calcSquareSize () {
    return (85 / squaresPerSide);
    }


