import { ScoreEstimator } from "./ScoreEstimator";
import { TestGoban } from "./TestGoban";

const NUM_TRIALS = 1000;
const TOLERANCE = 0.3;

test("Test ScoreEstimator", () => {
    const goban = new TestGoban();
    const se = new ScoreEstimator(goban, goban.engine, NUM_TRIALS, TOLERANCE, false);
});
