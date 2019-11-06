export default class RungeKutta {
    constructor(x0, y0, X, n0, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.N = N;
        this.n0 = n0;
    }

    fn(x, y){
        return 1 + 2 * (y/x);
    }

    getHForN(n){
        this.h = (this.X - this.x0) / n;
    }

    calculateSolution(){
        let m1;
        let m2;
        let m3;
        let m4;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.solution = [];

        this.solution.push({
            x: parseFloat(tmpX).toFixed(2),
            y: parseFloat(tmpY).toFixed(2)
        });

        while(tmpX + this.h <= this.X){
            m1 = this.h * this.fn(tmpX, tmpY);
            m2 = this.h * this.fn(tmpX + (this.h / 2), tmpY + (m1/2));
            m3 = this.h * this.fn(tmpX + (this.h / 2), tmpY + (m2/2));
            m4 = this.h * this.fn(tmpX + this.h, tmpY + m3);

            tmpX = tmpX + this.h;
            tmpY = tmpY + (m1 + (2 * m2) + (2 * m3) + m4) / 6;

            let point = {
                x: parseFloat(tmpX).toFixed(2),
                y: parseFloat(tmpY).toFixed(2)
            };

            this.solution.push(point);
        }
    }

    calculateLocalError(exactSolution){
        this.calculateSolution();

        this.localError = this.solution.map((point, index) => {
            let error = {
                x: parseFloat(point.x),
                y: Math.abs(point.y - exactSolution[index].y)
            };

            return error;
        });
    }

    calculateGlobalError(exactSolutions){
        this.globalError = [];

        for(let i = 0; i <= this.N - this.n0; i++){
            this.getHForN(i + this.n0);
            this.calculateLocalError(exactSolutions[i]);

            let ys = this.localError.map(point => point.y);

            console.log(ys);

            this.globalError.push({
                x: this.n0 + i,
                y: Math.max(...ys)
            });
        }
    }

}
