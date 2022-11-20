import { realInput } from "./input.js"

const input1 = realInput.split('mask = ').slice(1)
function createBinaryString(nMask) {
    // nMask must be between -2147483648 and 2147483647
    for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
        nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask;
}

const maskIt = (m, code) => {
    code = code.split('');
    for (let i=0; i<32; i++){
        if (m[i] != 'X') code[i] = m[i]
    }
    return code.join('')
}

const sol1 = input => {
    const regex = /mem\[(\d*)\] = (\d*)/g
    let arr = []
    let obj = {}
    for (let piece of input) {
        let p = piece.split('\n')
        let mask = p[0];
        let codes = p.slice(1).flatMap(x => [...x.matchAll(regex)])
        .map(y=> ({ [y[1]]: maskIt(mask, createBinaryString(y[2])) }))

        arr = [...arr, ...codes]
    }
    obj = arr.reduce((o, x) => ({...obj, []}))
    return arr

}

const part1 = sol1(input1)

// const part2 = sol2(input1)

console.log(part1)
