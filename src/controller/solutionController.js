import Exact from './../model/exact.js';
import Euler from './../model/euler.js';
import ImprovedEuler from './../model/improvedEuler.js';
import RungeKutta from './../model/rungeKutta.js';
import SolutionView from './../view/solutionView.js';

export default class SolutionConstroller{
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.N = N;
    }

    renderSolution(){
        let exact = new Exact(this.x0, this.y0, this.X, this.N);
        exact.calculate();

        let euler = new Euler(this.x0, this.y0, this.X, this.N);
        euler.calculate();

        let improvedEuler = new ImprovedEuler(this.x0, this.y0, this.X, this.N);
        improvedEuler.calculate();

        let rungeKutta = new RungeKutta(this.x0, this.y0, this.X, this.N);
        rungeKutta.calculate();

        let solutionView = new SolutionView(exact.result, euler.result,
                                            improvedEuler.result, rungeKutta.result);
        solutionView.renderChart();

    }
}

