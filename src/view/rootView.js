import Chart from 'chart.js';

export default class RootView{
    constructor(exact, euler, improvedEuler, rungeKutta){
        this.exact = exact;
        this.euler = euler;
        this.improvedEuler = improvedEuler;
        this.rungeKutta = rungeKutta;

        this.xs = this.euler.map(point => {
            return point.x;
        });
    }

    updateChartCanvas(){
        let container = document.getElementById('mainChartContainer');
        container.innerHTML = '<canvas id="mainChart"></canvas>';
    }

    setData(datasetsConfig){
        let datasets = [];

        if(datasetsConfig.exact.show){
            datasets.push({
                label: datasetsConfig.exact.label,
                data: this.exact,
                fill: false,
                borderColor: '#375e97',
                backgroundColor: '#375e97',
            });
        }

        if(datasetsConfig.euler.show){
            datasets.push({
                label: datasetsConfig.euler.label,
                data: this.euler,
                fill: false,
                borderColor: '#fb6542',
                backgroundColor: '#fb6542',
            });
        }

        if(datasetsConfig.improvedEuler.show){
            datasets.push({
                label: datasetsConfig.improvedEuler.label,
                data: this.improvedEuler,
                fill: false,
                borderColor: '#ffbb00',
                backgroundColor: '#ffbb00',
            });
        }

        if(datasetsConfig.rungeKutta.show){
            datasets.push({
                label: datasetsConfig.rungeKutta.label,
                data: this.rungeKutta,
                fill: false,
                borderColor: '#3f681c',
                backgroundColor: '#3f681c',
            });
        }

        this.data = {
            labels: this.xs,
            datasets: datasets
        };

    }

    renderChart(labelsNames){
        let ctx = document.getElementById('mainChart');

        new Chart(ctx, {
            type: 'line',
            data: this.data,
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: labelsNames.x
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: labelsNames.y
                        },
                    }]
                },
                animation: {
                    duration: 0
                }
            },
        });
    }
}
