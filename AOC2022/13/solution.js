import { realInput, realInput2, sampleInput } from "./input.js";

console.time()

const pairs = realInput.split('\n\n').map(x=>x.split('\n').map(y=>JSON.parse(y)))
const pairs2 = realInput2.split('\n\n').flatMap(x=>x.split('\n').map(y=>JSON.parse(y)))

const compare = (a, b) => {
    if (Array.isArray(a) && a.length == 0 && (Array.isArray(b) && b.length == 0)) return -1 
    if (Array.isArray(a) && a.length == 0 && (Array.isArray(b) && b.length > 0)) return 1
    if (Array.isArray(a) && a.length == 0 && (!Array.isArray(b))) return 1
    if (!Array.isArray(a) && (Array.isArray(b) && b.length == 0)) return 0
    if (!Array.isArray(a)) {const tA = []; tA.push(a); a = tA}
    if (!Array.isArray(b)) {const tA = []; tA.push(b); b = tA}
    for (let i = 0; i < a.length; i++) {
        if(i>(b.length-1)) return 0
        if  (Array.isArray(a[i]) || Array.isArray(b[i]))  {
            let c = compare(a[i], b[i])
            if (c >= 0) return c
        }
        if (a[i] > b[i] ) return 0
        if (a[i] < b[i] ) return 1
    }
    if (a.length < b.length) return 1
    return -1
}

const s =  pairs.map(x =>[x,  compare(x[0], x[1])])
const sol1 = s.reduce((sum,y,i) => y[1] ? sum + i + 1 : sum,0)

pairs2.sort((a,b) => compare(a , b) == 1 ? -1 : 1)

const sol2 = pairs2.reduce((s, x, i) => (x.flat(2)[0] == 2 && x.flat(2).length == 1 || x.flat(2)[0] == 6 && x.flat(2).length == 1 ) ? s * (i + 1) : s, 1)


console.time('Part1 Time:')
console.log("Part 1: ", sol1);
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2);
console.timeEnd('Part2 Time:')

console.timeEnd()