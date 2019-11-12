import ExactModel from './../model/exactModel.js';
import EulerModel from './../model/eulerModel.js';
import ImprovedEulerModel from './../model/improvedEulerModel.js';
import RungeKuttaModel from './../model/rungeKuttaModel.js';

export default class RootController{
    constructor(x0, y0, X, n0, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.n0 = n0;
        this.N = N;
    }

    updateData(){
        this.exact = new ExactModel(this.x0, this.y0, this.X, this.n0, this.N);
        this.euler = new EulerModel(this.x0, this.y0, this.X, this.n0, this.N);
        this.improvedEuler = new ImprovedEulerModel(this.x0, this.y0, this.X, this.n0, this.N);
        this.rungeKutta = new RungeKuttaModel(this.x0, this.y0, this.X, this.n0, this.N);
    }
}
