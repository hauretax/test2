
// let test = new Circle({ y: 0, x: 0, size: 30 })
// let test2 = new Circle({})

let canvaObj = new Canvashandler()

// testhandl.addCircle(test);

// let test3 = new Circle({})
// console.log(test3.setRandomPosition())

function printCircles() {
    for (let i = 0; i < 50; i++) {
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

    event.stopPropagation()
    //console.log(event)
    // canvaObj.clearOneObject(2)
    // canvaObj.print();
    canvaObj.deletClickedObject({ x: event.offsetX, y: event.offsetY })
    canvaObj.print();
}

canvas.addEventListener('click', clickObject, false);