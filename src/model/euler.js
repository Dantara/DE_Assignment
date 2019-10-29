export default class Euler {
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
        let slope = this.fn(this.x0, this.y0);

        let tmpX = this.x0;
        let tmpY = this.y0;

        this.data = [];

        this.data.push({x: tmpX, y: tmpY});

        while(tmpX + this.N < this.X){
            slope = this.fn(tmpX, tmpY);

            tmpY = tmpY + slope * tmpX;
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
