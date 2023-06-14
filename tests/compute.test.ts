import { compute } from "../src/compute";
import { Game } from "../src/types";

it("should return 300 on a perfect game", () => {
  const input300: Game = [
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

  const score = compute(input300);

  expect(score).toBe(300);
});

it("should return 0 on a gutter game", () => {
    const input0:
    Game = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0, 0],
    ];

    const score = compute(input0);

    expect(score).toBe(0);
});

it("should return 90 on a game of 9s", () => {
    const input90:
    Game = [
        [9, 0],
        [9, 0],
        [9, 0],
        [9, 0],
        [9, 0],
        [9, 0],
        [9, 0],
        [9, 0],
        [9, 0],
        [9, 0, 0],
    ];

    const score = compute(input90);

    expect(score).toBe(90);
});

it("should return 167 on a very random game", () => {
    const input167:
    Game = [
        [10, 0],
        [7, 3],
        [9, 0],
        [10, 0],
        [0, 8],
        [8, 2],
        [0, 6],
        [10, 0],
        [10, 0],
        [10, 8, 1],
    ];

    const score = compute(input167);

    expect(score).toBe(167);
});
