import Chart from 'chart.js';

export default class SolutionView{
    constructor(exact, euler, impovedEuler, rungeKutta){
        this.exact = exact;
        this.euler = euler;
        this.improvedEuler = impovedEuler;
        this.rungeKutta = rungeKutta;
    }

    updateChartCanvas(){
        let container = document.getElementById('mainChartContainer');
        container.innerHTML = '<canvas id="mainChart"></canvas>';
    }

    renderChart(){
        this.updateChartCanvas();

        let ctx = document.getElementById('mainChart');

        let labels = [];
        this.exact.forEach((point) => {
            labels.push(point.x);
        });

        let data = {
            labels: labels,
            datasets: [
                {
                    label: 'Exact',
                    data: this.exact,
                    fill: false,
                    borderColor: '#375e97',
                    backgroudColor: '#375e97',
                    pointBackgroudColor: '#375e97',
                    pointBorderColor: '#375e97',
                },
                {
                    label: 'Euler',
                    data: this.euler,
                    fill: false,
                    borderColor: '#fb6542',
                    backgroudColor: '#fb6542',
                    pointBackgroudColor: '#fb6542',
                    pointBorderColor: '#fb6542'
                },
                {
                    label: 'Improved Euler',
                    data: this.improvedEuler,
                    fill: false,
                    borderColor: '#ffbb00',
                    backgroudColor: '#ffbb00',
                    pointBackgroudColor: '#ffbb00',
                    pointBorderColor: '#ffbb00'
                },
                {
                    label: 'Runge-Kutta',
                    data: this.rungeKutta,
                    fill: false,
                    borderColor: '#3f681c',
                    backgroudColor: '#3f681c',
                    pointBackgroudColor: '#3f681c',
                    pointBorderColor: '#3f681c'
                }]
        };

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
                        },
                        ticks: {
                            min: 0,
                            max: 10,
                            stepSize: 1
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Y'
                        },
                        //ticks: {
                        //    min: 0,
                        //    max: 200,
                        //    stepSize: 5
                        //}
                    }]
                }//,
                //animation: {
                //    duration: 0
                //}
            },
        });
    }
}
