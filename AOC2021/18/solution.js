import { fuInput, realInput, s1, sampleInput } from "./input.js"

const n1 = "[[[[[9,8],1],2],3],4]"
const n2 = "[7,[6,[5,[4,[3,2]]]]]"
const n3 = "[[6,[5,[4,[3,2]]]],1]"
const n4 = "[[3,[2,[1,[7,3]]]],[6,[5,[4,[3,2]]]]]"
const n5 = "[[3,[2,[8,0]]],[9,[5,[4,[3,2]]]]]"

function isNumber(char) {
    if (typeof char !== 'string') {
        return false;
    }

    if (char.trim() === '') {
        return false;
    }

    return !isNaN(char);
}
const explode = (str) => {
    let countBracket = 0;
    let spl = str.split('')
    let foundOne = false
    let foundL = false
    let foundR = false
    for (let i = 0; i < spl.length; i++) {
        if (spl[i] == '[') countBracket++
        if (spl[i] == ']') countBracket--
        if (i>60){
            const pi = 3.14
        }
        if (countBracket == 5) {
            foundOne = true
            for (let j = i; j > 0; j--) {
                if (isNumber(spl[j])) {
                    foundL = true
                    spl[j] = +spl[j] + parseInt(spl[i + 1])
                    j = 0
                }
            }
            for (let j = i + 4; j < spl.length; j++) {
                if (isNumber(spl[j])) {
                    foundR = true
                    spl[j] = +spl[j] + parseInt(spl[i + 3])
                    j = spl.length
                }
            }
            if (spl[i - 1] == ',') spl.splice(i - 1, 7, ',0]')
            else spl.splice(i - 1, 7, '[0,')
            break;
        }
    }
    const f = spl.join('')
    return spl.join('')
}

const split = str => {
    let match = /\d\d/.exec(str)
    if (match) {
        const arr = str.split('')
        const num = parseInt(arr.slice(match.index, match.index + 2).join(''))
        arr.splice(match.index, 2, `[${Math.floor(num/2)},${Math.ceil(num/2)}]`)
        return arr.join('')
    }
    return str
}

const reduce = input => {
    let changed = true
    while (changed) {
        let temp = input
        input = explode(input)
        if (temp == input) input = split(input)
        if (temp == input) changed = false 
    }
    return input
}
const sol1 = input => input.split('\n').reduce((sum, x) => reduce('[' + sum + ',' + x + ']'))

let r = reduce('[[[[[4,3],4],4],[7,[[8,4],9]]],[1,1]]')
let r2 = reduce('[[[[0,[4,5]],[0,0]],[[[4,5],[2,6]],[9,5]]],[7,[[[3,7],[4,3]],[[6,3],[8,8]]]]]')


console.time()
console.log(sol1(realInput))
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");