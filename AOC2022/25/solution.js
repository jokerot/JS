import { realInput, sampleInput } from "./input.js";
console.time()


const toValue = a => {
    switch (a) {
        case '-':
            return -1
            break;

        case '=':
            return -2
            break;

        default:
            return parseInt(a)
    }
}

const toS = a => {
    switch (a) {
        case -1:
            return "-"
            break;

        case -2:
            return "="
            break;

        default:
            return a.toString()
    }
}

const numbers = realInput.split('\n').map(x => x.split('').map(y => toValue(y)).reverse())
const toDecimal = arr => arr.reduce((sum, x, i) => sum + x * (5) ** i, 0)

const toSnafu = n => {
    const arr = []
    let remember = 0
    let mod, left
    while (n > 0) {
        mod = n%5
        left = (n - mod) / 5
        mod = mod + remember
        remember = 0
        if (mod<=2) arr.unshift(toS(mod))
        else {
            arr.unshift(toS(mod-5))
            remember = 1
        }
        n = left
    }
    return arr.join('')
}

const sol1 = () => {

    const n = numbers.map((x) => toDecimal(x))
    let sum = n.reduce((s, x) => s + x, 0)
    return toSnafu(sum)

}
const sol2 = () => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()