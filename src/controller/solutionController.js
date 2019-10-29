import Exact from './../model/exact.js';
import Euler from './../model/euler.js';
import SolutionView from './../view/solutionView.js';

export default class SolutionConstroller{
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.N = N;
    }

    renderSolution(){
        console.log("Controller");
        console.log(this.x0);
        console.log(this.y0);
        console.log(this.X);
        console.log(this.N);
        let exact = new Exact(this.x0, this.y0, this.X, this.N);
        exact.calculate();
        console.log(exact.result);

        let euler = new Euler(this.x0, this.y0, this.X, this.N);
        euler.calculate();
        console.log(euler.result);

        let solutionView = new SolutionView(exact.result, euler.result);
        solutionView.renderChart();
    }
}

