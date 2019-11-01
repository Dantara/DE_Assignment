export default class RungeKutta {
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
        let m1 = this.N * this.fn(this.x0, this.y0);
        let m2 = this.N * this.fn(this.x0 + (this.N / 2), this.y0 + (m1/2));
        let m3 = this.N * this.fn(this.x0 + (this.N / 2), this.y0 + (m2/2));
        let m4 = this.N * this.fn(this.x0 + this.N, this.y0 + m3);

        let tmpX = this.x0;
        let tmpY = (m1 + (2 * m2) + (2 * m3) + m4) / 6;

        this.data = [];

        this.data.push({
            x: parseFloat(tmpX).toFixed(2),
            y: parseFloat(tmpY).toFixed(2)
        });

        while(tmpX + this.N < this.X){
            m1 = this.N * this.fn(this.x0, this.y0);
            m2 = this.N * this.fn(this.x0 + (this.N / 2), this.y0 + (m1/2));
            m3 = this.N * this.fn(this.x0 + (this.N / 2), this.y0 + (m2/2));
            m4 = this.N * this.fn(this.x0 + this.N, this.y0 + m3);

            tmpX = tmpX + this.N;
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
