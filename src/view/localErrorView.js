import Chart from 'chart.js';

export default class LocalErrorView{
    constructor(euler, impovedEuler, rungeKutta){
        this.euler = euler;
        this.improvedEuler = impovedEuler;
        this.rungeKutta = rungeKutta;
    }

    updateChartCanvas(){
        let container = document.getElementById('mainChartContainer');
        container.innerHTML = '<canvas id="mainChart"></canvas>';
    }

    render(){
        this.updateChartCanvas();

        let ctx = document.getElementById('mainChart');

        let labels = [];
        this.euler.forEach((point) => {
            labels.push(point.x);
        });

        let data = {
            labels: labels,
            datasets: [
                {
                    label: 'Euler error',
                    data: this.euler,
                    fill: false,
                    borderColor: '#fb6542',
                    backgroundColor: '#fb6542',
                },
                {
                    label: 'Improved Euler error',
                    data: this.improvedEuler,
                    fill: false,
                    borderColor: '#ffbb00',
                    backgroundColor: '#ffbb00',
                },
                {
                    label: 'Runge-Kutta error',
                    data: this.rungeKutta,
                    fill: false,
                    borderColor: '#3f681c',
                    backgroundColor: '#3f681c',
                }]
        };

        console.log(data);

        let myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'X'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Y'
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
