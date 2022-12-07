import { realInput, sampleInput } from "./input.js";

const Directory = (name) => ({
    name: name,
    dirs: [],
    files: []
})

const File = (name, size) => ({
    name: name,
    size: size
})

const sol1 = (input) => 1
const sol2 = (input) => 1



console.time('Part1 Time:')
console.log("Part 1: ", sol1(realInput));
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(realInput));
console.timeEnd('Part2 Time:')