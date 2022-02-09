import { ScoreEstimator, set_OGSScoreEstimator } from "./ScoreEstimator";
import { TestGoban } from "./TestGoban";

const NUM_TRIALS = 1000;
const TOLERANCE = 0.3;

// Probably need to do a little more here. at the very least, give a b c d actual
// variable names.
class MockEstimatorModuleObject {
    _malloc = (nbytes: number) => {
        return 0;
    };
    _free = (ptr: number) => {};
    public HEAP32 = { buffer: [] };
    cwrap = (_f: "estimate", _ret_type: string, _param_type: string[]) => {
        return (a: number, b: number, c: number, d: number) => 1000;
    };
}

function MockEstimatorModule() {
    return new MockEstimatorModuleObject();
}

(globalThis as any).CLIENT = true;
set_OGSScoreEstimator(MockEstimatorModule);

test("Test getStoneRemovalString", () => {
    const goban = new TestGoban();
    const se = new ScoreEstimator(goban, goban.engine, NUM_TRIALS, TOLERANCE, false);

    // TODO: figure out what scenarios this is set, and set it!
    expect(se.getStoneRemovalString()).toBe("");
});
