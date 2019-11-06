import Exact from './../model/exact.js';
import Euler from './../model/euler.js';
import ImprovedEuler from './../model/improvedEuler.js';
import RungeKutta from './../model/rungeKutta.js';
import SolutionView from './../view/solutionView.js';

export default class SolutionController{
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.N = N;
    }

    update(){
        let exact = new Exact(this.x0, this.y0, this.X, this.N);
        exact.calculateSolution();

        let euler = new Euler(this.x0, this.y0, this.X, this.N);
        euler.calculateSolution();

        let improvedEuler = new ImprovedEuler(this.x0, this.y0, this.X, this.N);
        improvedEuler.calculateSolution();

        let rungeKutta = new RungeKutta(this.x0, this.y0, this.X, this.N);
        rungeKutta.calculateSolution();

        let solutionView = new SolutionView(exact.solution, euler.solution,
                                            improvedEuler.solution, rungeKutta.solution);
        solutionView.render();

    }
}

