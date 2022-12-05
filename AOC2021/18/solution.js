const n1 = [[[[[9,8],1],2],3],4]
const n1f = n1.flat()
const n1ff = n1f.flat()
const n1fff = n1ff.flat()

const explode = (str) => {
    let countBracket = 0;
    let spl = str.split('')
    for (let i = 0; i < spl.length; i++) {
if (spl[i] == '[') countBracket++
if (spl[i] == ']') countBracket--

        
        
    }
}


console.log(n1f, n1ff, n1fff);

console.time()
console.log(sol1(realInput))
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");