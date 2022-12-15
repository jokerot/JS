import { realInput, sampleInput } from "./input.js";
console.time()
const regex = /Sensor at x=(-*\d+), y=(-*\d+): closest beacon is at x=(-*\d+), y=(-*\d+)/g

const sensors1 = realInput.split('\n').map(x => {
    return [...x.matchAll(regex)][0].slice(1).map(y => parseInt(y))
})
let l = '.'

const line1 = new Array(4000000).fill(".")
const linePos = 2000000
let min = 0
const fillLine = (x1, y1, x2, y2) => {
    const dX = Math.abs(x1 - x2)
    const dY = Math.abs(y1 - y2)
    const radius = dX + dY
    const cut = radius - (Math.abs(y1 - linePos))
    if (cut > 0) {
        for (let i = 0; i <= cut; i++) {
            line1[x1 + i] = '#'
            line1[x1 - i] = '#'
            min = min < x1 - i ? min : x1 - i
        }
    }
    if (y1 == linePos) line1[x1] = 'S'
    if (y2 == linePos) line1[x2] = 'B'
}


const sol1 = () => {
    sensors1.forEach(e => {
        fillLine(e[0], e[1], e[2], e[3],)
    });

    // console.log(line1.join(''))

    let count = 0
    for (let i = min; i < line1.length; i++) {
        if (line1[i] == "#") count++

    }
    return count
}

const sol2 = () => {
    sensors1.forEach(e => {
        fillLine(e[0], e[1], e[2], e[3],)
    });

    // console.log(line1.join(''))

    let count = 0
    for (let i = 0; i < line1.length; i++) {
        if (line1[i] == "#") count++

    }
    return count
}

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2);
console.timeEnd('Part2 Time:')

console.timeEnd()