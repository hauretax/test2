

let nbTouch = 0;
let click = 0;
let nbCible = 2;
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
printCircles()

//onclick do that
function clickObject(event) {
    if (!click) {
        startTime = Date.now();
    }
    click++;
    event.stopPropagation()
    nbTouch += canvaObj.deletClickedObject({ x: event.offsetX, y: event.offsetY })
    canvaObj.print();
    console.log(nbTouch)
    if (canvaObj.drawL.length == 0) {
        const totalTime = Date.now() - startTime
        console.log('u used:', totalTime / 1000)
    }
}
canvas.addEventListener('click', clickObject, false);