"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compute_1 = require("../src/compute");
it("should return 300 on a perfect game", () => {
    const input300 = [
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 0],
        [10, 10, 10],
    ];
    const score = (0, compute_1.compute)(input300);
    expect(score).toBe(300);
});
