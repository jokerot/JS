import { realInput, sampleInput } from "./input.js";

const intersect = (a, b) => {
    var setB = new Set(b);
    return [...new Set(a)].filter(x => setB.has(x));
}

const sol1 = input => input.split('\n\n')
    .map(x => x.split('\n').join(''))
    .map(x => [...new Set(x.split(''))].length)
    .reduce((sum, x) => sum + x, 0)

const sol2 = input => input.split('\n\n')
    .map(x => x.split('\n'))
    .map(x => x.reduce((s, y) => intersect(s, y), x[0]))
    .reduce((sum, x) => sum + x.length, 0)

const part1 = sol1(realInput)
const part2 = sol2(realInput)

console.log(part1)
console.log(part2)