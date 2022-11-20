import { realInput } from "./input.js"

const input1 = realInput.split('mask = ').slice(1)
function createBinaryString(nMask) {
    // nMask must be between -2147483648 and 2147483647
    for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
        nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask;
}

const sol1 = input => {
    const regex = /mem\[(\d*)\] = (\d*)/g
    const arr = []
    for (let piece of input) {
        let p = piece.split('\n')
        let mask = p[0];
        let codes = p.slice(1).flatMap(x => [...x.matchAll(regex)]).map
        arr.push([mask, codes])
    }
    return arr

}

const part1 = sol1(input1)

// const part2 = sol2(input1)

console.log(part1)
