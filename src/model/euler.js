export default class Euler {
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.h = (X - x0) / N;
    }

    fn(x, y){
        return 1 + 2 * (y/x);
    }

    calculate(){
        let slope;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.data = [];

        this.data.push({
            x: parseFloat(tmpX).toFixed(2),
            y: parseFloat(tmpY).toFixed(2)
        });

        while(tmpX + this.h <= this.X){
            slope = this.fn(tmpX + this.h, tmpY);

            tmpY = tmpY + slope * this.h;
            tmpX = tmpX + this.h;

            let point = {
                x: parseFloat(tmpX).toFixed(2),
                y: parseFloat(tmpY).toFixed(2)
            };

            this.data.push(point);
        }
    }

    get result(){
        return this.data;
    }

}
