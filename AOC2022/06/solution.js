import { realInput, sampleInput } from "./input.js";

const isMarker = m => ([...new Set(m.split(''))].join('') === m)


const sol1 = (input) => {
    for (let i = 0; i <= input.length - 4 ; i++) {
        if (isMarker(input.slice(i, i+4))) return i+4
            }
}
const sol2 = (input) => {
    for (let i = 0; i <= input.length - 14 ; i++) {
        if (isMarker(input.slice(i, i+14))) return i+14
            }
}



console.time('Part1 Time:')
console.log("Part 1: ", sol1(realInput));
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(realInput));
console.timeEnd('Part2 Time:')