function addRows() {
    let numberOfRows = 4;
    const rows = [];
    const container = document.querySelector(".js-container");

    for (let i = 1; i <= numberOfRows; i++) {
        rows[i] = document.createElement('div');
        rows[i].classList.add(`js-row${i}`, 'rows');
        container.appendChild(rows[i]);
    }
}

function addSquares() {
    let numberOfSquares = 4;
    let numberOfRows = 4;
    let rowSelector;
    const squares = [];
    
    for (let i = 1; i <= numberOfRows; i++) {
        rowSelector = document.querySelector(`.js-row${i}`);
        
        for (let j = 1; j <= numberOfSquares; j++) {
            squares[j] = document.createElement('div');
            squares[j].classList.add('js-squares', 'squares');
            rowSelector.appendChild(squares[j]);
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
        
        square.addEventListener('click', () => {
            square.style.backgroundColor = randomColor();
        });
    });
}

addRows();
addSquares();
addClickEvent();
