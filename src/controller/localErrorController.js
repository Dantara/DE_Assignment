import Exact from './../model/exact.js';
import Euler from './../model/euler.js';
import ImprovedEuler from './../model/improvedEuler.js';
import RungeKutta from './../model/rungeKutta.js';
import LocalErrorView from './../view/localErrorView.js';
import RootController from './rootController.js';

export default class LocalErrorController extends RootController{
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    update(){
        let exact = new Exact(this.x0, this.y0, this.X, this.n0, this.N);
        exact.getHForN(this.N);
        exact.calculateSolution();

        let euler = new Euler(this.x0, this.y0, this.X, this.n0, this.N);
        euler.getHForN(this.N);
        euler.calculateLocalError(exact.solution);

        let improvedEuler = new ImprovedEuler(this.x0, this.y0, this.X, this.n0, this.N);
        improvedEuler.getHForN(this.N);
        improvedEuler.calculateLocalError(exact.solution);

        let rungeKutta = new RungeKutta(this.x0, this.y0, this.X, this.n0, this.N);
        rungeKutta.getHForN(this.N);
        rungeKutta.calculateLocalError(exact.solution);

        let localErrorView = new LocalErrorView(euler.localError, improvedEuler.localError,
                                            rungeKutta.localError);
        localErrorView.render();

    }
}
