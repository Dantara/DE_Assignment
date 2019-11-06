import NumericalModel from './numericalModel.js';

export default class Euler extends NumericalModel {
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    calculateSolution(){
        let slope;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.solution = [];

        this.solution.push({
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

            this.solution.push(point);
        }
    }


}
