import SolutionController from './../controller/solutionController.js';

export default class SubmitSolution{
    constructor(){}

    readData(){
        let x0 = document.getElementById("inputX0");
        let y0 = document.getElementById("inputY0");
        let X = document.getElementById("inputX");
        let N = document.getElementById("inputN");

        this.x0 = parseFloat(x0.value);
        this.y0 = parseFloat(y0.value);
        this.X = parseFloat(X.value);
        this.N = parseFloat(N.value);
    }

    update(){
        this.readData();

        let solution = new SolutionController(this.x0, this.y0, this.X, this.N);
        solution.renderSolution();
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
        setInterval(() => { self.update(); }, 100);
    }
}
