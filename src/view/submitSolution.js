import SolutionController from './../controller/solutionController.js';

export default class SubmitSolution{
    constructor(){
        this.x0_el = document.getElementById("inputX0");
        this.y0_el = document.getElementById("inputY0");
        this.X_el = document.getElementById("inputX");
        this.N_el = document.getElementById("inputN");
    }

    readData(){
        this.x0 = parseFloat(this.x0_el.value);
        this.y0 = parseFloat(this.y0_el.value);
        this.X = parseFloat(this.X_el.value);
        this.N = parseFloat(this.N_el.value);
    }

    checkData(){
        let renderButton = document.getElementById("renderSolution");
        let wrongDataButton = document.getElementById("wrongData");

        if(this.N > 0 && this.x0 != 0 && this.X > this.x0){
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
            let solution = new SolutionController(this.x0, this.y0, this.X, this.N);
            solution.renderSolution();
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
        };

        this.x0_el.onkeyup = update;
        this.y0_el.onkeyup = update;
        this.X_el.onkeyup = update;
        this.N_el.onkeyup = update;
    }
}
