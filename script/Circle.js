let circleIndex = 0;
class Circle extends Canvashandler {
    constructor({ x = 50, y = 50, size = 20, color = "#000000" }) {
        super();
        // console.log('Circle constructor call')
        this.posx = x
        this.posy = y
        this.size = size
        this.color = color;
        this.id = circleIndex;
        circleIndex++;
    }

    draw() {
        //console.log('Circle draw', this.posx, this.posy)
        //console.log(this.id)
        ctx.beginPath();
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.posx, this.posy, this.size, 0, 2 * Math.PI, true);
        ctx.fill();
    }

    isOn({ x, y }) {
        // console.log(x, this.posx, y, this.posy, this.size)
        // console.log(Math.sqrt(Math.pow(x - this.posx, 2) + Math.pow(y - this.posy, 2)))
        if (Math.sqrt(Math.pow(x - this.posx, 2) + Math.pow(y - this.posy, 2)) < this.size) {
            return true
        }
        return false
    }

    setRandomPosition() {
        this.posx = Math.random() * this.canvas.width
        this.posy = Math.random() * this.canvas.height
    }
}