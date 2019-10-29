export default class Exact {
    constructor(x0, y0, X, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.N = N;
    }

    fn(x){
        return -1 * x + this.C * (x*x);
    }

    solveIVP(){
        this.C = (this.y0 + this.x0) / (this.x0 * this.x0);
    }

    calculate(){
        this.solveIVP();

        let tmp = this.x0;
        this.data = [];

        while(tmp < this.X){
            let point = {
                x: tmp,
                y: this.fn(tmp)
            };

            tmp = tmp + this.N;

            this.data.push(point);
        }
    }

    get result(){
        return this.data;
    }
}

