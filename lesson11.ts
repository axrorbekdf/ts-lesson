interface IShape{
    x: number;
    y: number;
    draw(): void;
}

class Shape implements IShape{
    x: number;
    y: number;
    private a: number;
    protected b: number;

    constructor(x?: number, y?: number){
        // ixtiyoriy argumantlar

        this.x = x;
        this.y = y;
    }

    draw(){
        console.log(this.x.toString())
        console.log(this.y.toString())
    }
}

let shape = new Shape(10,20);
shape.draw();