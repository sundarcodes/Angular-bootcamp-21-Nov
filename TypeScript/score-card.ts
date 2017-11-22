import { Batsman } from './batsman';

export class ScoreCard {
    private totalRuns: number;
    private striker: Batsman;
    constructor(private batsmen: Batsman[]) {
        this.totalRuns = 0;
        this.striker = this.batsmen[0];
    }
    computeScore(input: number[]) {
        // 1. Go through the array
        // 2. Accumulate the total score
        // 3. Add runs to the striker
        // 4. Check if run scored is odd or even
        // 5. If odd, rotate strike.
        // 6. Check if balls mod 6, rotate strike
        // let striker = this.batsmen[0];
        // let nonstriker = this.batsmen[1];
        for (let i = 0 ; i < input.length; i++) {
            this.totalRuns += input[i];
            this.striker.incrementRunsBy(input[i]);
            if (input[i] % 2 == 1) {
                // Swap strike
                this.rotateStrike();
            }
            if ( (i + 1) % 6 === 0){
                this.rotateStrike();
            }
        }
    }

    rotateStrike() {
        // if (this.striker == this.batsmen[0]) {
        //     this.striker = this.batsmen[1];
        // } else {
        //     this.striker = this.batsmen[0];
        // }
        this.striker = (this.striker == this.batsmen[0])
        ? this.batsmen[1] : this.batsmen[0] ;
    }
    printScoreCard() {
        console.log(`Total runs scored: ${this.totalRuns}`);
        console.log(`Batsman 1 score: ${this.batsmen[0].runs()}`);
        console.log(`Batsman 2 score: ${this.batsmen[1].runs()}`);
    }

}