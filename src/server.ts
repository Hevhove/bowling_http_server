// do the necessary importing from modules and also import the compute function
import http from "http";
import express from "express";
import { compute } from "./compute";

// Create an instance of the express application
export const app = express();

// app::use() method adds middleware for the app object, importing JSON data from HTTP requests into the request.body property with parsed data
app.use(express.json());

/*
    app::post() defines a route for handling POST requests to the /compute path
    We need to build the callback function here, which is executed once the app receives a POST request from a client to this endpoint
*/
app.post("/compute", (request, response) => {
    // Game example: [Frame, Frame, ..., LastFrame];
    // for a total of 9 tuples and 1 triple
    const game = request.body.game;

    // Validate input
    if (!isValidGame(game)) {
        // If invalid, send back Bad Request (400) and an error message
        console.log("[SERVER]: Invalid input: ", game);
        return response.status(400).send("Invalid input");
    }
    // console.log("[SERVER]: Valid input received: ", game);

    // Compute the score and send out as a valid 200 OK response
    const score = compute(game);

    return response.status(200).send({ score });
});

const isValidGame = (game: object): boolean => {
    // check if frames contains 10 elements
    if (!Array.isArray(game) || game.length !== 10) {
        return false;
    }

    // check if each element in frames is an Array
    if (!game.every((frame: any) => (Array.isArray(frame)))) {
        console.log("")
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
}
