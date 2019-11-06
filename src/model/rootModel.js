export default class RootModel{
    constructor(x0, y0, X, n0, N){
        this.x0 = x0;
        this.y0 = y0;
        this.X = X;
        this.n0 = n0;
        this.N = N;
    }

    getHForN(n){
        this.h = (this.X - this.x0) / n;
    }

}
