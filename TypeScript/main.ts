import { ScoreCard } from './score-card';
import { Batsman } from './batsman';

// Create 2 batsman

const batsman1 = new Batsman('Sachin');
const batsman2 = new Batsman('Dravid');

const scoreCard = new ScoreCard([batsman1, batsman2]);
scoreCard.computeScore([1,2,0,0,4,1,6,2,1,3]);
scoreCard.printScoreCard();