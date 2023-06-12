"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../src/server");
/*
    This is a testing file that acts as a client which sends a post request with a a body with an object containing a single game of bowling
    and its respective scoring. The server is expected to send back to the client a response object as body of the post response
    with a key of score and value of the game's bowling score such as : {score: 300}
*/
it("has a compute endpoint that returns the score with status code 200", async () => {
    const response = await (0, supertest_1.default)(server_1.app)
        .post("/compute")
        .send({
        game: [
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
        ],
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ score: 300 });
});
