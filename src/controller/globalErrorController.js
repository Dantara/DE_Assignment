import Exact from './../model/exact.js';
import Euler from './../model/euler.js';
import ImprovedEuler from './../model/improvedEuler.js';
import RungeKutta from './../model/rungeKutta.js';
import GlobalErrorView from './../view/globalErrorView.js';
import RootController from './rootController.js';

export default class GlobalErrorController extends RootController{
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    update(){
        let exact = new Exact(this.x0, this.y0, this.X, this.n0, this.N);
        exact.calculateForRangeOfN();

        let euler = new Euler(this.x0, this.y0, this.X, this.n0, this.N);
        euler.calculateGlobalError(exact.solutions);

        let improvedEuler = new ImprovedEuler(this.x0, this.y0, this.X, this.n0, this.N);
        improvedEuler.calculateGlobalError(exact.solutions);

        let rungeKutta = new RungeKutta(this.x0, this.y0, this.X, this.n0, this.N);
        rungeKutta.calculateGlobalError(exact.solutions);

        let globalErrorView = new GlobalErrorView(euler.globalError, improvedEuler.globalError,
                                            rungeKutta.globalError);
        globalErrorView.render();

    }
}
