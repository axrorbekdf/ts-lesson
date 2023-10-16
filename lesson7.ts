// function drawShape(x: number, y: number){
//     console.log(x.toString);
// }

// drawShape(2,3);

interface Shape{
    x: number;
    y: number;
}

function drawShape(shape: Shape){
    console.log(shape.x.toString());
}

let shape: Shape;
shape = {x: 10, y: 20};
drawShape(shape);