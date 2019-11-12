import GlobalErrorView from './../view/globalErrorView.js';
import RootController from './rootController.js';

export default class GlobalErrorController extends RootController{
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    update(){
        this.updateData();

        this.exact.calculateForRangeOfN();

        this.euler.calculateGlobalError(this.exact.solutions);

        this.improvedEuler.calculateGlobalError(this.exact.solutions);

        this.rungeKutta.calculateGlobalError(this.exact.solutions);

        let globalErrorView = new GlobalErrorView(this.euler.globalError, this.improvedEuler.globalError,
                                            this.rungeKutta.globalError);
        globalErrorView.render();
    }
}
