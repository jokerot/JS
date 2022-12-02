import { realInput, sampleInput } from "./input.js";
const start = Date.now();

const score = {
    "A X": 1 + 3,
    "B X": 1 + 0,
    "C X": 1 + 6,
    "A Y": 2 + 6,
    "B Y": 2 + 3,
    "C Y": 2 + 0,
    "A Z": 3 + 0,
    "B Z": 3 + 6,
    "C Z": 3 + 3,
}

const score2 = {
    "A X": 3 + 0,
    "B X": 1 + 0,
    "C X": 2 + 0,
    "A Y": 1 + 3,
    "B Y": 2 + 3,
    "C Y": 3 + 3,
    "A Z": 2 + 6,
    "B Z": 3 + 6,
    "C Z": 1 + 6,
}

const sol1 = realInput.split('\n').map(x => score[x]).reduce((s, y) => s + y, 0)
const sol2 = realInput.split('\n').map(x => score2[x]).reduce((s, y) => s + y, 0)

console.log("Part 1: ", sol1);
console.log("Part 2: ", sol2);

console.log("Time spent: ", Date.now() - start, " ms")