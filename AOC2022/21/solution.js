import { realInput, sampleInput } from "./input.js";
console.time()

const monkeys = new Map;
const input = realInput.split('\n').map(x => x.split(': '))

const fillMonkeys = (arr) => {
    arr.forEach(element => {
        monkeys.set(element[0], element[1])
    });
}

fillMonkeys(input)

const yell = (key) => {
    let v, v1, v2
    const value = monkeys.get(key)
    if (isNaN(value)) {
        v = value.match(/([a-z]+) ([\-\+\*\/]) ([a-z]+)/)
        v1 = yell(v[1])
        v2 = yell(v[3])
        if (v[2] == '/') return v1 / v2
        if (v[2] == '*') return v1 * v2
        if (v[2] == '-') return v1 - v2
        if (v[2] == '+') return v1 + v2
        console.log("No Operation??")
    } else {
        return +value

    }
}

console.time('Part1 Time:')
const sol1 = yell("root")
const sol2 = () => {
    let toMatch = yell("qrgn")
    let iHigh = 3755000000000
    let iLow = 0
    let i, delta
    while (true) {
        delta = Math.floor((iHigh - iLow) / 2)
        i = iLow + delta
        monkeys.set('humn', i.toString())
        const a = yell("lzfc")
        if (a == toMatch) {
            return i
        }
        if (a < toMatch) {
            iHigh = iLow + delta
        } else iLow = iLow + delta
        i++
    }
}

console.log("Part 1: ", sol1);
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()