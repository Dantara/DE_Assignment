import RootModel from './rootModel.js';

export default class ExactModel extends RootModel {
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
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
        this.solution = [];

        while(tmpX <= this.X){
            let tmpY = this.fn(tmpX);

            let point = {
                x: parseFloat(tmpX).toFixed(2),
                y: parseFloat(tmpY).toFixed(2)
            };

            tmpX = tmpX + this.h;

            this.solution.push(point);
        }
    }

    calculateForRangeOfN(){
        this.solutions = [];

        for(let i = this.n0; i <= this.N; i++){
            this.getHForN(i);
            this.calculateSolution();
            this.solutions.push(this.solution);
        }
    }
}

