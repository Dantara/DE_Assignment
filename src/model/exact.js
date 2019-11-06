export default class Exact {
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.h = (X - x0) / N;
    }

    fn(x){
        return -1 * x + this.C * (x*x);
    }

    solveIVP(){
        this.C = (this.y0 + this.x0) / (this.x0 * this.x0);
    }

    calculateSolution(){
        this.solveIVP();

        let tmpX = this.x0;
        this.data = [];

        while(tmpX <= this.X){
            let tmpY = this.fn(tmpX);

            let point = {
                x: parseFloat(tmpX).toFixed(2),
                y: parseFloat(tmpY).toFixed(2)
            };

            tmpX = tmpX + this.h;

            this.data.push(point);
        }
    }

    get solution(){
        return this.data;
    }
}

