"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const compute_1 = require("./compute");
// Create an instance of the express application
exports.app = (0, express_1.default)();
// app::use() method adds middleware for the app object, importing JSON data from HTTP requests into the request.body property with parsed data
exports.app.use(express_1.default.json());
/*
    app::post() defines a route for handling POST requests to the /compute path
    We need to build the callback function here, which is executed once the app receives a POST request from a client to this endpoint
*/
exports.app.post("/compute", (request, response) => {
    // Game example: [Frame, Frame, ..., LastFrame]; // for a total of 9 tuples and 1 triple
    const game = request.body.game;
    // DONE: Validate input
    if (!isValidGame(game)) {
        console.log("[SERVER]: Invalid input: ", game);
        return response.status(400).send("Invalid input");
    }
    console.log("[SERVER]: Valid input received: ", game);
    // Compute the score and send out as a valid 200 response
    const score = (0, compute_1.compute)(game);
    console.log(score);
    return response.status(200).send({ score });
});
const isValidGame = (game) => {
    // We return code 400 for Bad Request Error
    // check if frames contains 10 elements
    if (!Array.isArray(game) || game.length !== 10) {
        return false;
    }
    // check if each element in frames is an Array
    if (!game.every((frame) => (Array.isArray(frame)))) {
        console.log("");
        return false;
    }
    // check if the 9 first elements have 2 elements and the last one has 3 elements
    for (let i = 0; i < game.length - 1; i++) {
        if (!(game[i].length === 2)) {
            return false;
        }
    }
    if (game[game.length - 1].length !== 3) {
        return false;
    }
    // if all of the above didn't trigger, we're good to go!
    return true;
};
