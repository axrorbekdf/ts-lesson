export class Shape{
    private _x: number;
    private _y: number;

    constructor(x?: number, y?: number){
        // ixtiyoriy argumantlar
        this._x = x;
        this._y = y;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    set x(value: number){
        if(value < 0)
            throw new Error("Value cannot be less than 0.");

        this._x = value;
    }

    set y(value: number){
        if(value < 0)
            throw new Error("Value cannot be less than 0.");

        this._y = value;
    }

    draw(){
        console.log(this._x.toString())
        console.log(this._y.toString())
    }
}