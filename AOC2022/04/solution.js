import { realInput, sampleInput } from "./input.js";

const intersection = (array1, array2) => array1.filter(value => array2.includes(value))

const makeRange = (x, y) => {
    const arr = []
    for (let i = +x; i <= +y; i++) {
        arr.push(i)
    }
    return arr
}

const checkOverlap = (a1, a2) => {
    const a3 = intersection(a1, a2)
    if (JSON.stringify(a3) === JSON.stringify(a1) || JSON.stringify(a3) === JSON.stringify(a2)) return true
    return false
}

console.time('ArrayMaking Time:')
const aArray = realInput.split('\n').map(x => x.split(',').map(y => makeRange(y.split('-')[0], y.split('-')[1])))
console.timeEnd('ArrayMaking Time:')

const sol1 = () => aArray.filter(x => checkOverlap(x[0], x[1])).length
const sol2 = () => aArray.filter(x => intersection(x[0], x[1]).length).length

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')