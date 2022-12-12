import { realInput, sampleInput } from "./input.js";

console.time()


const sol1 = input => 1

const sol2 = input => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1(sampleInput.split('\n\n')));
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(sampleInput.split('\n\n')));
console.timeEnd('Part2 Time:')

console.timeEnd()