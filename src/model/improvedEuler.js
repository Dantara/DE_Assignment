export default class ImprovedEuler {
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.N = N;
    }

    fn(x, y){
        return 1 + 2 * (y/x);
    }

    calculate(){
        let m1;
        let m2;

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.data = [];

        this.data.push({
            x: parseFloat(tmpX).toFixed(2),
            y: parseFloat(tmpY).toFixed(2)
        });

        while(tmpX + this.N < this.X){
            m1 = this.fn(tmpX, tmpY);
            m2 = this.fn(tmpX + this.N, tmpY + m1 * this.N);

            tmpY = tmpY + this.N * (m1 + m2) / 2;
            tmpX = tmpX + this.N;

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