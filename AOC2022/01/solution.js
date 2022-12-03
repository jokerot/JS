import { realInput, sampleInput } from "./input.js";
const start = Date.now();

let input = realInput.split('\n\n')

let calories = input.map(x => x.split('\n').reduce((sum, y) => +y + sum, 0))


let sol1 = Math.max(...calories)
let sol2 = calories.sort().slice(-3).reduce((sum, y) => +y + sum, 0)


console.log("Part one: ", sol1)
console.log("Part two: ", sol2);


console.log("Time spent: ", Date.now() - start, "ms")