var ScoreCard = (function () {
    function ScoreCard(batsmen) {
        this.batsmen = batsmen;
        this.totalRuns = 0;
        this.striker = this.batsmen[0];
    }
    ScoreCard.prototype.computeScore = function (input) {
        // 1. Go through the array
        // 2. Accumulate the total score
        // 3. Add runs to the striker
        // 4. Check if run scored is odd or even
        // 5. If odd, rotate strike.
        // 6. Check if balls mod 6, rotate strike
        // let striker = this.batsmen[0];
        // let nonstriker = this.batsmen[1];
        for (var i = 0; i < input.length; i++) {
            this.totalRuns += input[i];
            this.striker.incrementRunsBy(input[i]);
            if (input[i] % 2 == 1) {
                // Swap strike
                this.rotateStrike();
            }
            if ((i + 1) % 6 === 0) {
                this.rotateStrike();
            }
        }
    };
    ScoreCard.prototype.rotateStrike = function () {
        // if (this.striker == this.batsmen[0]) {
        //     this.striker = this.batsmen[1];
        // } else {
        //     this.striker = this.batsmen[0];
        // }
        this.striker = (this.striker == this.batsmen[0])
            ? this.batsmen[1] : this.batsmen[0];
    };
    ScoreCard.prototype.printScoreCard = function () {
        console.log("Total runs scored: " + this.totalRuns);
        console.log(this.batsmen[0].name + " score: " + this.batsmen[0].runs());
        console.log(this.batsmen[1].name + " score: " + this.batsmen[1].runs());
    };
    return ScoreCard;
})();
exports.ScoreCard = ScoreCard;
