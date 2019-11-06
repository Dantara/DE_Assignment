export default class ImprovedEuler {
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.h = (X - x0) / N;
    }

    fn(x, y){
        return 1 + 2 * (y/x);
    }

    calculateSolution(){
        let m1;
        let m2;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.data = [];

        this.data.push({
            x: parseFloat(tmpX).toFixed(2),
            y: parseFloat(tmpY).toFixed(2)
        });

        while(tmpX + this.h <= this.X){
            m1 = this.fn(tmpX, tmpY);
            m2 = this.fn(tmpX + this.h, tmpY + m1 * this.h);

            tmpY = tmpY + this.h * (m1 + m2) / 2;
            tmpX = tmpX + this.h;

            let point = {
                x: parseFloat(tmpX).toFixed(2),
                y: parseFloat(tmpY).toFixed(2)
            };

            this.data.push(point);
        }
    }

    get solution(){
        return this.data;
    }

    calculateLocalError(exactSolution){
        this.localError = this.data.map((point, index) => {
            let error = {
                x: parseFloat(point.x),
                y: Math.abs(point.y - exactSolution[index].y)
            };

            return error;
        });
    }

}
