import { realInput, sampleInput } from "./input.js";
const start = Date.now();

let input = realInput.split('\n\n')

let calories = input.map(x => x.split('\n').reduce((sum, y) => +y + sum, 0))

let topThreeSum = calories.sort().slice(-3).reduce((sum, y) => +y + sum, 0)


console.log("Part one: ", Math.max(...calories))
console.log("Part two: ", topThreeSum);


console.log("Time spent: ", Date.now() - start, "ms")