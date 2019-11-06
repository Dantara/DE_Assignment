import NumericalModel from './numericalModel.js';

export default class ImprovedEuler extends NumericalModel {
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    calculateSolution(){
        let m1;
        let m2;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.solution = [];

        this.solution.push({
            x: parseFloat(tmpX).toFixed(2),
            y: parseFloat(tmpY).toFixed(2)
        });

        while(tmpX + this.h <= this.X){
            m1 = this.fn(tmpX, tmpY);
            m2 = this.fn(tmpX + this.h, tmpY + m1 * this.h);

            tmpY = tmpY + this.h * (m1 + m2) / 2;
            tmpX = tmpX + this.h;

            let point = {
                x: parseFloat(tmpX).toFixed(2),
                y: parseFloat(tmpY).toFixed(2)
            };

            this.solution.push(point);
        }
    }
}
