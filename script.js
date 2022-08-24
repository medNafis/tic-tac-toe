const InputOne = document.getElementById('inputOne');
const InputTwo = document.getElementById('inputOne');


const playerOneBtn = document.getElementById('btnOne');
const playerTwoBtn = document.getElementById('btnTwo');
const startBtn = document.getElementById('start');

const form = document.getElementById('playerform');

const player = (name) => {
    return { name };
}   

var playerOne;
var playerTwo;

 
playerOneBtn.addEventListener('click', createPlayerOne);

function createPlayerOne(event) {
    event.preventDefault();
    playerOne = player(InputOne.value);
    console.log(playerOne);
    return playerOne;
}

playerTwoBtn.addEventListener('click', createPlayerTwo);

function createPlayerTwo(event) {
    event.preventDefault();
    playerTwo = player(InputTwo.value);
    return playerTwo;
}

startBtn.addEventListener('click', displayController);

function displayController (event) {
    event.preventDefault();
    form.style.display = 'none';
    drawBoard();
    render();
    
}



const gameBoard = (() => {
    var board = [];
    return {
        board,
    };
})();

function  drawBoard(){
    
    const game = document.getElementById('gameContainer');
    const turnDiv = document.createElement('div');
    const container = document.createElement('div');
    const grid = document.createElement("div");
    for( let i = 0; i < 9; i++){
        const box = document.createElement('div');
        box.classList.add('item');
        grid.appendChild(box);
    }
    

    turnDiv.textContent = playerOne.name + "'s turn";
    turnDiv.classList.add('turndiv');
    game.appendChild(turnDiv);

    container.classList.add('container');
    game.appendChild(container);

    grid.classList.add('grid');
    container.appendChild(grid);

}

function render(){
    var board=[];
    const grid = document.querySelector('.grid');
    grid.addEventListener("click", function(e){
        const tgt = e.target;
        if(tgt.childNodes.length === 0){
            if(board.length % 2 == 0)
                tgt.textContent = "X";
            else
                tgt.textContent = "O"; 
            
            board.push(tgt.textContent);
            console.log(board);
        
        }

    })
    

}

function gameOver(){


}

