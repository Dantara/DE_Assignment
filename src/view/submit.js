import LocalErrorController from './../controller/localErrorController.js';
import SolutionController from './../controller/solutionController.js';
import GlobalErrorController from './../controller/globalErrorController.js';

export default class Submit{
    constructor(){
        this.x0_el = document.getElementById("inputX0");
        this.y0_el = document.getElementById("inputY0");
        this.X_el = document.getElementById("inputX");
        this.n0_el = document.getElementById("inputN0");
        this.N_el = document.getElementById("inputN");
        this.chart = document.getElementById("selectChart");
        this.n0_container = document.getElementById("n0-container");
    }

    readData(){
        this.x0 = parseFloat(this.x0_el.value);
        this.y0 = parseFloat(this.y0_el.value);
        this.X = parseFloat(this.X_el.value);
        this.n0 = parseFloat(this.n0_el.value);
        this.N = parseFloat(this.N_el.value);
    }

    checkData(){
        let renderButton = document.getElementById("renderSolution");
        let wrongDataButton = document.getElementById("wrongData");

        if(this.N > 0 && this.x0 != 0 && this.X > this.x0 && this.n0 < this.N && this.n0 > 0){
            renderButton.style.display = 'block';
            wrongDataButton.style.display = 'none';

            return true;
        }else{
            renderButton.style.display = 'none';
            wrongDataButton.style.display = 'block';

            return false;
        }
    }

    update(){
        this.readData();

        if(this.checkData()){
            switch(this.chart.selectedIndex){
            case 0: {
                this.n0_container.style.display = 'none';
                let solution = new SolutionController(this.x0, this.y0, this.X, this.n0, this.N);
                solution.update();
                break;
            }

            case 1: {
                this.n0_container.style.display = 'none';
                let localError = new LocalErrorController(this.x0, this.y0, this.X, this.n0, this.N);
                localError.update();
                break;
            }

            case 2: {
                this.n0_container.style.display = 'flex';
                let globalError = new GlobalErrorController(this.x0, this.y0, this.X, this.n0, this.N);
                globalError.update();
            }
            }
        }
    }

    setOnClick(){
        let renderButton = document.getElementById("renderSolution");

        let self = this;
        renderButton.onclick = function(){
            self.update();
        };
    }

    enableAutoReload(){
        let self = this;

        function update(){
            self.update();
        }

        this.x0_el.onkeyup = update;
        this.y0_el.onkeyup = update;
        this.X_el.onkeyup = update;
        this.n0_el.onkeyup = update;
        this.N_el.onkeyup = update;
        this.chart.onchange = update;
    }
}
