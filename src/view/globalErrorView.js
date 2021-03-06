import ErrorView from './errorView.js';

export default class GlobalErrorView extends ErrorView{
    constructor(euler, improvedEuler, rungeKutta){
        super(euler, improvedEuler, rungeKutta);
    }

    render(){
        this.updateChartCanvas();

        let datasetConfig = {
            exact: {
                label: 'Exact',
                show: false
            },
            euler: {
                label: 'Euler error',
                show: true
            },
            improvedEuler: {
                label: 'Improved Euler error',
                show: true
            },
            rungeKutta: {
                label: 'Runge-Kutta error',
                show: true
            }
        };

        this.setData(datasetConfig);

        this.renderChart({x: 'N', y: 'Total error'});
    }
}
