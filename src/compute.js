"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compute = void 0;
/*
    Note:
        For the final frame, I intend to accept input to the compute/ endpoint to be [7, 0 , 0]
*/
function compute(game) {
    // Variable declarations
    let score = 0;
    const bonusScores = Array(10).fill(0);
    // Loop over all of the frames and calculate bonusScores
    for (let i = 0; i < game.length; i++) {
        const frame = game[i];
        const frameScore = game[i].reduce((a, b) => a + b, 0);
        // Strike: score 10 points + the number of pins you knock down for the entire next frame.
        if (frameScore === 10) {
            const nextFrame = game[i + 1] || [];
            const nextNextFrame = game[i + 2] || [];
            const nextRoll = nextFrame[0] || 0;
            const nextNextRoll = nextFrame[1] !== 0 ? nextFrame[1] : nextNextFrame[0] || 0;
            // Strike
            if (frame[0] === 10) {
                score += 10 + nextRoll + nextNextRoll;
                // Spare
            }
            else {
                score += 10 + nextRoll;
            }
        }
        else {
            score += frameScore;
        }
    }
    return score;
    // throw new Error("Not yet implemented"); // TODO
}
exports.compute = compute;
