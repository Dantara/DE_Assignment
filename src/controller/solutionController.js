import SolutionView from './../view/solutionView.js';
import RootController from './rootController.js';

export default class SolutionController extends RootController{
    constructor(x0, y0, X, n0, N){
        super(x0, y0, X, n0, N);
    }

    update(){
        this.updateData();

        this.exact.getHForN(this.N);
        this.exact.calculateSolution();

        this.euler.getHForN(this.N);
        this.euler.calculateSolution();

        this.improvedEuler.getHForN(this.N);
        this.improvedEuler.calculateSolution();

        this.rungeKutta.getHForN(this.N);
        this.rungeKutta.calculateSolution();

        let solutionView = new SolutionView(this.exact.solution, this.euler.solution,
                                            this.improvedEuler.solution, this.rungeKutta.solution);
        solutionView.render();

    }
}

