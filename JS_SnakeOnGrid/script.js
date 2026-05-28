// Get HTML elements
let gameBoard = document.getElementById("gameBoard");
let scoreText = document.getElementById("score");
let highScoreText = document.getElementById("highScore");
let timerText = document.getElementById("timer");
let gameOverScreen = document.getElementById("gameOverScreen");

// Game settings
let totalRows = 25;
let totalColumns = 25;
let totalCells = totalRows * totalColumns;

// Snake starting position
let snakeBody = [
    {row:12, column:12},
    {row:12, column:11},
    {row:12, column:10}
];

// Food starting position
let foodPosition = {row:8, column:8};

// Game state variables
let currentDirection = "right";
let gameSpeed = 140;
let gameInterval;
let timerInterval;
let currentScore = 0;
let seconds = 0;
let gamePaused = false;

// Load saved high score
let savedHighScore = localStorage.getItem("snakeHighScore");
if(savedHighScore){ highScoreText.innerText = savedHighScore; }

// Create the 25x25 grid cells
function createBoard(){
    gameBoard.innerHTML = "";
    for(let i = 0; i < totalCells; i++){
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        gameBoard.appendChild(cell);
    }
}

// Draw snake and food on the board
function drawGame(){
    let allCells = document.querySelectorAll(".grid-cell");
    allCells.forEach(function(cell){
        cell.classList.remove("snake");
        cell.classList.remove("food");
    });
    snakeBody.forEach(function(part){
        let cellNumber = (part.row * totalColumns) + part.column;
        allCells[cellNumber].classList.add("snake");
    });
    let foodCellNumber = (foodPosition.row * totalColumns) + foodPosition.column;
    allCells[foodCellNumber].classList.add("food");
}

// Move snake one step in the current direction
function moveSnake(){
    if(gamePaused){ return; }

    let snakeHead = {row:snakeBody[0].row, column:snakeBody[0].column};

    if(currentDirection === "right"){ snakeHead.column++; }
    if(currentDirection === "left"){ snakeHead.column--; }
    if(currentDirection === "up"){ snakeHead.row--; }
    if(currentDirection === "down"){ snakeHead.row++; }

    // Check wall collision
    if(snakeHead.row < 0 || snakeHead.row >= totalRows ||
       snakeHead.column < 0 || snakeHead.column >= totalColumns){
        endGame();
        return;
    }

    // Check self collision
    for(let i = 0; i < snakeBody.length; i++){
        if(snakeHead.row === snakeBody[i].row && snakeHead.column === snakeBody[i].column){
            endGame();
            return;
        }
    }

    snakeBody.unshift(snakeHead);

    // Check if food was eaten
    if(snakeHead.row === foodPosition.row && snakeHead.column === foodPosition.column){
        currentScore++;
        scoreText.innerText = currentScore;
        updateHighScore();
        createNewFood();
    } else {
        snakeBody.pop(); // Remove tail if no food eaten
    }

    drawGame();
}

// Place food at a random position
function createNewFood(){
    foodPosition = {
        row: Math.floor(Math.random() * totalRows),
        column: Math.floor(Math.random() * totalColumns)
    };
}

// Change snake direction (called by buttons and keyboard)
function changeDirection(direction){ currentDirection = direction; }

// Keyboard arrow key controls
document.addEventListener("keydown", function(event){
    if(event.key === "ArrowUp"){ changeDirection("up"); }
    if(event.key === "ArrowDown"){ changeDirection("down"); }
    if(event.key === "ArrowLeft"){ changeDirection("left"); }
    if(event.key === "ArrowRight"){ changeDirection("right"); }
});

// Start the game loop and timer
function startGame(){
    createBoard();
    drawGame();
    gameInterval = setInterval(moveSnake, gameSpeed);
    timerInterval = setInterval(updateTimer, 1000);
}

// Update the timer display every second
function updateTimer(){
    seconds++;
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    if(remainingSeconds < 10){ remainingSeconds = "0" + remainingSeconds; }
    timerText.innerText = minutes + ":" + remainingSeconds;
}

// Save high score to local storage if beaten
function updateHighScore(){
    let currentHighScore = localStorage.getItem("snakeHighScore") || 0;
    if(currentScore > currentHighScore){
        localStorage.setItem("snakeHighScore", currentScore);
        highScoreText.innerText = currentScore;
    }
}

// Toggle pause on/off
function pauseGame(){ gamePaused = !gamePaused; }

// Stop game and show game over screen
function endGame(){
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    gameOverScreen.style.display = "flex";
}

// Restart by reloading the page
function restartGame(){ location.reload(); }

// Start everything
startGame();