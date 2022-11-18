import { realInput, sampleInput, sampleInput2 } from "./input.js"

const input1 = sampleInput.split('\n').map(x => +x).sort((a, b) => a - b);
const input2 = realInput.split('\n').map(x => +x).sort((a, b) => a - b);
const input3 = sampleInput2.split('\n').map(x => +x).sort((a, b) => a - b);

const sol1 = () => input2
    .reduce((obj, x) =>
        ({ ...obj, [x - obj.previous]: obj[x - obj.previous] += 1, ['previous']: x })
        , { 1: 0, 2: 0, 3: 0, 'previous': 0 })

const sol2 = (iA) => {
    const resultArr = [];
    let counter = 0;

    for (let i = 0; i <= iA.length - 1; i++){
        if((iA[i] +1 == iA[i+1])) counter++
        // if(iA[i] +1 == iA[i+1] && !counter) counter+=2
        if((iA[i] +1 != iA[i+1] && counter)) {resultArr.push(counter+1); counter=0}
        if (i == iA.length - 1 && counter) resultArr.push(counter+1)
    }

    const solArr = resultArr.map(x=> x<5 ? 2**(x-2) : 7 ** (x-4) )
    const solution2 = solArr.reduce((p, x) => p*x, 1)
    return solution2
}

const part1 = sol1()
const part2 = sol2([0,...input2])

// console.log(part1[1] * (part1[3] + 1))
console.log(part2)
