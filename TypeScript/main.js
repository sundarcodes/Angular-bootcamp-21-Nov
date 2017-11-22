var score_card_1 = require('./score-card');
var batsman_1 = require('./batsman');
// Create 2 batsman
var batsman1 = new batsman_1.Batsman('Sachin');
var batsman2 = new batsman_1.Batsman('Dravid');
var scoreCard = new score_card_1.ScoreCard([batsman1, batsman2]);
scoreCard.computeScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
scoreCard.printScoreCard();
