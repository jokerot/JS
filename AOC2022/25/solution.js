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

const numbers = sampleInput.split('\n').map(x => x.split('').map(y => toValue(y)).reverse())
const toDecimal = arr => arr.reduce((sum, x, i) => sum + x * (5) ** i, 0)

const toSnafu = n => {
    let guess = 0
    let i = 0
    let val = 0
    while (true) {
        i++;
        if (2 * i ** 5 > n) break;
    }
    guess = 2 * i ** 5
    val = 2


    for (let j = -2; j < 2; j++) {
        if (Math.abs(guess - n) > Math.abs(j * i ** 5 - n)) {
            guess = j * i ** 5 - n
            val = j
        }
    }
    return [val, n - guess]
}

toSnafu(4890)

const sol1 = () => {

    const n = numbers.map((x) => toDecimal(x))
    return n.reduce((s, x) => s + x, 0)

}
const sol2 = () => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()