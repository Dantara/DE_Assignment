import 'bootstrap';
import './assets/css/app.scss';
import SubmitSolution from './view/submitSolution.js';
import SolutionView from './view/solutionView.js';
import SolutionController from './controller/solutionController.js';

let solutionContoller = new SolutionController(1, 2, 10, 2);
solutionContoller.renderSolution();

let submitSolution = new SubmitSolution();
submitSolution.setOnClick();

