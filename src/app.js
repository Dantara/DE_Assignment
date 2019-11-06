import 'bootstrap';
import './assets/css/app.scss';
import 'mathjax/es5/tex-chtml-full.js';
import Submit from './view/submit.js';
import SolutionView from './view/solutionView.js';
import SolutionController from './controller/solutionController.js';

let solutionContoller = new SolutionController(1, 2, 10, 3);
solutionContoller.update();

let submit = new Submit();
submit.setOnClick();
submit.enableAutoReload();

