const n1 = `[[[[[9,8],1],2],3],4]`
const n2 = `[7,[6,[5,[4,[3,2]]]]]`

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
        if (countBracket == 5) {
            for (let j = i; j > 0; j--) {
                if (isNumber(spl[j])) {
                    foundL = true
                    spl[j] = +spl[j] + parseInt(spl[i + 1])
                    j = 0
                }
            }
            for (let j = i+4; j < spl.length; j++) {
                if (isNumber(spl[j])) {
                    foundR = true
                    spl[j] = +spl[j] + parseInt(spl[i + 3])
                    j = spl.length
                }
            }

            spl.splice(i-1,7,'[0,')

            break;
        }


    }
    return spl.join('')
}

let nn = explode(n1)
let nn2 = explode(n2)
console.log(explode);

console.time()
// console.log(sol1(realInput))
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");