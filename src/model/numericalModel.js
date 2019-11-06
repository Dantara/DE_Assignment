import RootModel from './rootModel.js';

export default class NumericalModel extends RootModel{
    fn(x, y){
        return 1 + 2 * (y/x);
    }

    calculateLocalError(exactSolution){
        this.calculateSolution();

        this.localError = this.solution.map((point, index) => {
            let error = {
                x: parseFloat(point.x),
                y: Math.abs(point.y - exactSolution[index].y)
            };

            return error;
        });
    }

    calculateGlobalError(exactSolutions){
        this.globalError = [];

        for(let i = 0; i <= this.N - this.n0; i++){
            this.getHForN(i + this.n0);
            this.calculateLocalError(exactSolutions[i]);

            let ys = this.localError.map(point => point.y);

            this.globalError.push({
                x: this.n0 + i,
                y: Math.max(...ys)
            });
        }
    }
}
