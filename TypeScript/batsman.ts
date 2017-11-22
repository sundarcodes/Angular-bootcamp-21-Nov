import { Player } from './player';

export class Batsman extends Player {
    private _runs: number;
    constructor(name: string) {
        super(name);
        this._runs = 0;
    }
    runs() : number {
        return this._runs;
    }
    incrementRunsBy(num: number) {
        this._runs += num;
    }

}