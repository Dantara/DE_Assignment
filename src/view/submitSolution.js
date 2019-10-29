import SolutionController from './../controller/solutionController.js';

export default class SubmitSolution{
    constructor(){}

    setOnClick(){
        let renderButton = document.getElementById("renderSolution");

        let x0 = document.getElementById("inputX0");
        let y0 = document.getElementById("inputY0");
        let X = document.getElementById("inputX");
        let N = document.getElementById("inputN");

        renderButton.onclick = function(){
            let x0_f = parseFloat(x0.value);
            let y0_f = parseFloat(y0.value);
            let X_f = parseFloat(X.value);
            let N_f = parseFloat(N.value);


            console.log("Submit:");
            console.log(x0_f);
            console.log(y0_f);
            console.log(X_f);
            console.log(N_f);
            let solution = new SolutionController(x0_f, y0_f, X_f, N_f);
            solution.renderSolution();
        };
    }
}
