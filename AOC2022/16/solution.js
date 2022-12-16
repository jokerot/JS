import { realInput, sampleInput } from "./input.js";
console.time()
const regex = /Valve (\w\w) has flow rate=(\d+); tunnel[s]? lead[s]? to valve[s]? (.*)/g
const valves = sampleInput.split('\n')
    .map(x =>[...x.matchAll(regex)][0].slice(1))
    .map(y=>([y[0], y[1], y[2].split(', ') ]))





const sol1 = () => 1
const sol2 = () => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()