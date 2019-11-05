export default class RungeKutta {
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.h = (X - x0) / N;
    }

    fn(x, y){
        return 1 + 2 * (y/x);
    }

    calculate(){
        let m1;
        let m2;
        let m3;
        let m4;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.data = [];

        this.data.push({
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

            this.data.push(point);
        }
    }

    get result(){
        return this.data;
    }

}
