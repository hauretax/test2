
// let test = new Circle({ y: 0, x: 0, size: 30 })
// let test2 = new Circle({})

let nbTouch = 0;
let click = 0;
let nbCible = 2;
let startTime;


let canvaObj = new Canvashandler()

// testhandl.addCircle(test);

// let test3 = new Circle({})
// console.log(test3.setRandomPosition())

function printCircles() {
    for (let i = 0; i < nbCible; i++) {
        let c = new Circle({});
        c.setRandomPosition();
        canvaObj.addObject(c);
    }
    canvaObj.print();
}

printCircles()


// function superfn() {
//     printCircles()
//     setTimeout(superfn, 1000);
// }

// superfn()

function clickObject(event) {
    if (!click) {
        startTime = Date.now();
    }
    click++;
    event.stopPropagation()
    //console.log(event)
    // canvaObj.clearOneObject(2)
    // canvaObj.print();
    nbTouch += canvaObj.deletClickedObject({ x: event.offsetX, y: event.offsetY })
    canvaObj.print();
    console.log(nbTouch)
    if (canvaObj.drawL.length == 0) {
        const totalTime = Date.now() - startTime
        console.log('u used:', totalTime / 1000)
    }
}

canvas.addEventListener('click', clickObject, false);