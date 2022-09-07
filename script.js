const InputOne = document.getElementById('inputOne');
const InputTwo = document.getElementById('inputTwo');


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
    playerOneBtn.remove();
    return playerOne;
}

playerTwoBtn.addEventListener('click', createPlayerTwo);

function createPlayerTwo(event) {
    event.preventDefault();
    playerTwo = player(InputTwo.value);
    playerTwoBtn.remove();
    return playerTwo;
}

startBtn.addEventListener('click', displayController);

function displayController (event) {
    event.preventDefault();
    form.style.display = 'none';
    drawBoard();
    render();
    
}

function restartGame(e){
    e.preventDefault();
    board = []; 
   
    document.getElementById("container").remove();
    document.getElementById("turndiv").remove();
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
    const btnContainer = document.createElement('div');
    const restart = document.createElement("button");
    for( let i = 0; i < 9; i++){
        const box = document.createElement('div');
        box.classList.add('item');
        box.setAttribute("id", i);
        grid.appendChild(box);
    }
    

    turnDiv.textContent = playerOne.name + "'s turn";
    turnDiv.classList.add('turndiv');
    turnDiv.setAttribute('id', 'turndiv');
    game.appendChild(turnDiv);

    container.classList.add('container');
    container.setAttribute("id",'container');
    game.appendChild(container);

    grid.classList.add('grid');
    grid.setAttribute("id",'grid');
    container.appendChild(grid);

    btnContainer.classList.add('btnContainer');
    container.appendChild(btnContainer);

    restart.setAttribute("id",'btn');
    restart.textContent = "Restart";
    btnContainer.appendChild(restart);

    btn = document.getElementById('btn');
    btn.addEventListener("click", restartGame);
}

var board=[];

function render(){
    
    const grid = document.querySelector('.grid');
    grid.addEventListener("click", function(e){
        const tgt = e.target;
        
        if (tgt.childNodes.length === 0){
            if(board.length % 2 == 0){
                tgt.textContent = "X";
                board.push(tgt.textContent);
                changeTurnDiv();
                gameOver();
                
            }
            else{
                tgt.textContent = "O"; 
                board.push(tgt.textContent);
                changeTurnDiv();
                gameOver();
            }
            
        }
    })
    
}



function changeTurnDiv() {
    const turnDiv = document.querySelector('.turndiv');
    
    if (board.length % 2 == 0){
        turnDiv.textContent = playerOne.name +"'s turn";
    }
    else 
        turnDiv.textContent = playerTwo.name +"'s turn";
}


function gameOver(){
    
    const grid = document.querySelector('.grid');
    const one = document.getElementById("0");
    const two = document.getElementById("1");
    const three = document.getElementById("2");
    const four = document.getElementById("3");
    const five = document.getElementById("4");
    const six = document.getElementById("5");
    const seven = document.getElementById("6");
    const eight = document.getElementById("7");
    const nine = document.getElementById("8");
    const turnDiv = document.querySelector('.turndiv');

    if(one.textContent == "X" && two.textContent == "X" && three.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(one.textContent == "X" && four.textContent == "X" && seven.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(one.textContent == "X" && five.textContent == "X" && nine.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(nine.textContent == "X" && eight.textContent == "X" && seven.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(nine.textContent == "X" && six.textContent == "X" && three.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(seven.textContent == "X" && five.textContent == "X" && three.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(four.textContent == "X" && five.textContent == "X" && six.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(two.textContent == "X" && five.textContent == "X" && eight.textContent == "X"){
        turnDiv.textContent = "Game over, " + playerOne.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }

    // player two 

    if(one.textContent == "O" && two.textContent == "O" && three.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(one.textContent == "O" && four.textContent == "O" && seven.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(one.textContent == "O" && five.textContent == "O" && nine.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(nine.textContent == "O" && eight.textContent == "O" && seven.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(nine.textContent == "O" && six.textContent == "O" && three.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(seven.textContent == "O" && five.textContent == "O" && three.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(four.textContent == "O" && five.textContent == "O" && six.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(two.textContent == "O" && five.textContent == "O" && eight.textContent == "O"){
        turnDiv.textContent = "Game over, " + playerTwo.name +" wins ";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
    if(board.length == 9) {
        turnDiv.textContent = "Game over, it's a tie";
        turnDiv.style.fontSize = "48px";
        grid.remove();
    }
}

