import Exact from './../model/exact.js';
import Euler from './../model/euler.js';
import ImprovedEuler from './../model/improvedEuler.js';
import RungeKutta from './../model/rungeKutta.js';
import LocalErrorView from './../view/localErrorView.js';

export default class LocalErrorController{
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
        euler.calculateLocalError(exact.solution);

        let improvedEuler = new ImprovedEuler(this.x0, this.y0, this.X, this.N);
        improvedEuler.calculateSolution();
        improvedEuler.calculateLocalError(exact.solution);

        let rungeKutta = new RungeKutta(this.x0, this.y0, this.X, this.N);
        rungeKutta.calculateSolution();
        rungeKutta.calculateLocalError(exact.solution);

        let localErrorView = new LocalErrorView(euler.localError, improvedEuler.localError,
                                            rungeKutta.localError);
        localErrorView.render();

    }
}
