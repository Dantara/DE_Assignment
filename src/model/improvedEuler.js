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
        let m1 = this.fn(this.x0, this.y0);
        let m2 = this.fn(this.x0, this.y0 + m1 * this.N);

        let tmpX = this.x0;
        let tmpY = this.N * (m1 + m2) / 2;

        this.data = [];

        this.data.push({x: tmpX, y: tmpY});

        while(tmpX + this.N < this.X){
            m1 = this.fn(this.x0, this.y0);
            m2 = this.fn(this.x0, this.y0 + m1 * this.N);

            tmpY = tmpY + this.N * (m1 + m2) / 2;
            tmpX = tmpX + this.N;

            let point = {
                x: tmpX,
                y: tmpY
            };

            this.data.push(point);
        }
    }

    get result(){
        return this.data;
    }

}
