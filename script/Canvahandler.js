console.log('Canvahandler.js')


let canvas = document.getElementById('warzone');
let ctx = canvas.getContext('2d');



class Canvashandler {
    constructor() {
        // console.log('canvahandler constructor call')
        this.canvas = document.getElementById('warzone');
        this.ctx = canvas.getContext('2d');
        this.drawL = [];
    }

    print() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawL.forEach(el => el.draw())
    }

    addObject(obj) {
        if (obj) {
            this.drawL.push(obj)
        }
        else
            this.handleError('u didn t send obj to print')
    }

    deletClickedObject({ x, y }) {
        const tmp = this.drawL.length
        this.drawL = this.drawL.filter((el) => {
            //console.log(el.posx, el.posy)
            if (el.isOn({ x, y })) {
                // console.log('toucher')
                return false
            }
            return true
        })
        return tmp - this.drawL.length
        // console.log(this.drawL)
    }

    clearObjects() {
        this.drawL = [];
    }

    clearOneObject(id) {
        this.drawL.pop()
        console.log(this.drawL)
    }

    handleError(text) {
        if (!text) {
            console.error('error in Canvashandler')
            return
        }
        console.error('Canvashandler Error:', text)
    }

}

