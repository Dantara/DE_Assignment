import RootView from './rootView.js';

export default class SolutionView extends RootView{
    constructor(exact, euler, impovedEuler, rungeKutta){
        super(exact, euler, impovedEuler, rungeKutta);
    }

    render(){
        this.updateChartCanvas();

        let datasetConfig = {
            exact: {
                label: 'Exact',
                show: true
            },
            euler: {
                label: 'Euler',
                show: true
            },
            improvedEuler: {
                label: 'Improved Euler',
                show: true
            },
            rungeKutta: {
                label: 'Runge-Kutta',
                show: true
            }
        };

        this.setData(datasetConfig);

        this.renderChart({x: 'X', y: 'Y'});
    }
}
