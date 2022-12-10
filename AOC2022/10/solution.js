import { otherInput, realInput, sampleInput } from "./input.js";

console.time()

const sol1 = input => {

    const cycles = [1, 1]
    let value = 1

    input.forEach(line => {
        if (line.startsWith('noop')) cycles.push(value)
        else {
            cycles.push(value)
            value += +line.split(' ')[1]
            cycles.push(value)
        }

    });
    let sum = 0
    for (let i = 20; i < cycles.length; i += 40) {
        sum = sum + i * cycles[i];

    }

    return sum
}


const sol2 = input => {

    const cycles = [1, 1]
    let value = 1

    input.forEach(line => {
        if (line.startsWith('noop')) cycles.push(value)
        else {
            cycles.push(value)
            value += +line.split(' ')[1]
            cycles.push(value)
        }

    });
    cycles.shift()
    const sprites = cycles.map((x, i) => [x - 1, x, x + 1].includes(i%40) ? '#' : '.')
    let tempArr = []
    let newArr = []
    for (let i = 1; i < sprites.length; i++) {
        tempArr.push(sprites[i]);
        if (i%40 == 0) {
            console.log(tempArr.join(''))
            newArr.push(tempArr)
            tempArr = []
        }
    }
    return newArr

}




console.time('Part1 Time:')
console.log("Part 1: ", sol1(realInput.split('\n')));
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(realInput.split('\n')));
console.timeEnd('Part2 Time:')

console.timeEnd()