//get canvas item

let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");


//object position
let xPostion = 0;
let yPosition = 0;
let xDirection = 2;


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



// rect moving vertically then wrapping around 

function moveVertical() {
    //clear screen
    ctx.clearRect(0, 0, 500, 500);

    //draw rectangle at current position
    ctx.fillRect(0, 20, 20, yPosition);

    //move the x position over by x pixels 
    yPosition += 1;


    //did I hit the wall? if so wrap around
    if (yPosition >= 500) {
        yPosition = 0;
    }
}


// rect bouncing horizontally
let xPosition = 0;

function bounceHorizontal() {

    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition = xPosition + xDirection;
    if (xPosition >= 500 || xPosition < 0) {
        xDirection = -xDirection;
    }
}
setInterval(bounceHorizontal, 10);