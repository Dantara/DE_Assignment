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

        console.log(labels);

        let data = {
            labels: labels,
            datasets: [
                {
                    label: 'Exact',
                    data: this.exact,
                    fill: false,
                    borderColor: '#9e1428',
                    pointBackgroudColor: '#9e1428',
                    pointBorderColor: '#9e1428',
                },
                {
                    label: 'Euler',
                    data: this.euler,
                    fill: false,
                    borderColor: '#be3b14',
                    pointBackgroudColor: '#be3b14',
                    pointBorderColor: '#be3b14'
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
                        }//,
                        //ticks: {
                        //    min: 0,
                        //    max: 200,
                        //    stepSize: 5
                        //}
                    }]
                }
            },
        });
    }
}
