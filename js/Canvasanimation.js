//get canvas item

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let evilEmoji = document.getElementById("evilEmoji");


let keydownOutput = document.getElementById("keydown-output");
let keyupOutput = document.getElementById("keyup-output");


//player position and movement 
let playerX = 250;
let playerY = 50;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 5;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;


const IMG_WIDTH = 40;
const IMG_HEIGHT = 40;


//ball position and movement 
let ballX = 100
let ballY = 100
let ballXDir = 10;
let ballYDir = 10;
const BALL_RADIUS = 15;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT);

}

function movePlayer() {
    playerX += playerSpeed * playerXDir;
    playerY += playerSpeed * playerYDir;

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 500 - PADDLE_WIDTH) {
        playerX = 500 - PADDLE_WIDTH;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function drawImage() {
    ctx.drawImage(evilEmoji, ballX, ballY, IMG_WIDTH, IMG_HEIGHT);
}


function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

function checkBallCollision() {
    if ((ballY - BALL_RADIUS > 450) || (ballY < 20 + BALL_RADIUS)) {
        ballYDir = ballYDir * -1;
    }

    if ((ballX > 450) || (ballX < 20)) {
        ballXDir = ballXDir * -1;
    }

    //check to see paddle collision 
    if (ballX + BALL_RADIUS >= playerX &&
        ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH &&
        ballY + BALL_RADIUS >= playerY &&
        ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT) {
        ballYDir = ballYDir * -1;
    }
}



function refreshPlayer() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    /*
    drawBall();
    */
    moveBall();
    checkBallCollision();
    drawImage();
}

//When key is pressed
function keyPressed(event) {
    // get the actuall key pressed 
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    //move player
    if (key === 37) {
        playerXDir = -1;
    } else if (key === 39) {
        playerXDir = 1;
    }

    if (key === 40) {
        playerYDir = 1;
    } else if (key === 38) {
        playerYDir = -1;
    }
}

//when key is released 
function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key up code: " + key;

    //make player stop
    if (key === 37) {
        playerXDir = 0;
    } else if (key === 39) {
        playerXDir = 0;
    }

    if (key === 40) {
        playerYDir = 0;
    } else if (key === 38) {
        playerYDir = 0;
    }
}


let xPosition = 0;

function moveHorizontal() {

    //clear screen
    ctx.clearRect(0, 0, 500, 500);

    //draw rectangle at current position
    ctx.fillRect(xPosition, 0, 20, 20);

    //move the x position over by x pixels 
    xPosition += 1;


    //did I hit the wall? if so wrap around
    if (xPosition >= 500) {
        xPosition = 0;
    }
}
//setInteral(moveHoritzontal, 10);
setInterval(refreshPlayer, 30);