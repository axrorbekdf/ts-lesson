interface IShape{
    x: number;
    y: number;
    draw(): void;
}

class Shape implements IShape{
    x: number;
    y: number;
    draw(){
        console.log(this.x.toString())
        console.log(this.y.toString())
    }
}

let shape = new Shape();
shape.x = 32;
shape.y = 243;
shape.draw();