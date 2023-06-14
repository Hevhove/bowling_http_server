import { Game } from "./types";

export function compute(game: Game): number {
    // Variable declarations
    let score: number = 0;

    // Loop over all of the frames and calculate bonusScores
    for (let i = 0; i < game.length; i++) {
        const frame = game[i];
        const frameScore = game[i].reduce((sum, roll) => sum + roll, 0);

        // Strike: score 10 points + the number of pins you knock down for the entire next frame.
        if (frameScore === 10) {
            // Get the next frame and the next next frame
            // || [] is a fallback in case the next frame is undefined
            const nextFrame = game[i + 1] ?? [];
            const nextNextFrame = game[i + 2] ?? [];
            const nextRoll = nextFrame[0] ?? 0;
            const nextNextRoll = nextFrame[1] !== 0 ? nextFrame[1] : nextNextFrame[0] ?? 0;
            // Strike : 10 points + the number of pins on next 2 rolls
            if (frame[0] === 10) {
                score += 10 + nextRoll + nextNextRoll;
            }
            // Spare : 10 points + the number of pins on next roll
            else {
                score += 10 + nextRoll;
            }
        } else {
            score += frameScore;
        }
    }
    return score;
}
