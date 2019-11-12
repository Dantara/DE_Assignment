import LocalErrorView from './../view/localErrorView.js';
import RootController from './rootController.js';

export default class LocalErrorController extends RootController{
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    update(){
        this.updateData();

        this.exact.getHForN(this.N);
        this.exact.calculateSolution();

        this.euler.getHForN(this.N);
        this.euler.calculateLocalError(this.exact.solution);

        this.improvedEuler.getHForN(this.N);
        this.improvedEuler.calculateLocalError(this.exact.solution);

        this.rungeKutta.getHForN(this.N);
        this.rungeKutta.calculateLocalError(this.exact.solution);

        let localErrorView = new LocalErrorView(this.euler.localError, this.improvedEuler.localError,
                                            this.rungeKutta.localError);
        localErrorView.render();
    }
}
