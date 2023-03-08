

let nbTouch = 0;
let click = 0;
let nbCible = 50;
let startTime;
let canvaObj = new Canvashandler()

//initializing 
function printCircles() {
    for (let i = 0; i < nbCible; i++) {
        let c = new Circle({});
        c.setRandomPosition();
        canvaObj.addObject(c);
    }
    canvaObj.print();
}

//start new game
function newGame() {
    if (canvaObj.drawL.length)
        return
    nbTouch = 0;
    click = 0;
    document.getElementById('result').textContent = ''
    printCircles()
}

//onclick do that
function clickObject(event) {
    event.stopPropagation()
    if (!click) {
        startTime = Date.now();
    }
    click++;
    nbTouch += canvaObj.deletClickedObject({ x: event.offsetX, y: event.offsetY })
    canvaObj.print();
    console.log(nbTouch)
    if (canvaObj.drawL.length == 0) {
        const totalTime = Date.now() - startTime
        document.getElementById('result').textContent = totalTime / 1000
    }
}
canvas.addEventListener('click', clickObject, false);
document.getElementById('resetButton').addEventListener('click', resetGame, false);


function resetGame(event) {
    event.stopPropagation()
    newGame();
}
newGame();