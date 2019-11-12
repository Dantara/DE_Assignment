import NumericalModel from './numericalModel.js';

export default class RungeKuttaModel extends NumericalModel {
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    calculateSolution(){
        let m1;
        let m2;
        let m3;
        let m4;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.solution = [];

        this.solution.push({
            x: parseFloat(tmpX).toFixed(2),
            y: parseFloat(tmpY).toFixed(2)
        });

        while(tmpX + this.h <= this.X){
            m1 = this.h * this.fn(tmpX, tmpY);
            m2 = this.h * this.fn(tmpX + (this.h / 2), tmpY + (m1/2));
            m3 = this.h * this.fn(tmpX + (this.h / 2), tmpY + (m2/2));
            m4 = this.h * this.fn(tmpX + this.h, tmpY + m3);

            tmpX = tmpX + this.h;
            tmpY = tmpY + (m1 + (2 * m2) + (2 * m3) + m4) / 6;

            let point = {
                x: parseFloat(tmpX).toFixed(2),
                y: parseFloat(tmpY).toFixed(2)
            };

            this.solution.push(point);
        }
    }
}
