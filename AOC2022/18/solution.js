import { realInput, sampleInput } from "./input.js";
console.time()

const cubes = realInput.split('\n').map(x => x.split(','))
const size = 5
const sol1 = () => {
    let counter = cubes.length * 6
    cubes.forEach(c => {
        cubes.forEach(e => {
            const m = e
            const k = c
            if ((e[0] == c[0] && e[1] == c[1] && Math.abs(e[2] - c[2]) == 1)
                || (e[0] == c[0] && e[2] == c[2] && Math.abs(e[1] - c[1]) == 1)
                || (e[1] == c[1] && e[2] == c[2] && Math.abs(e[0] - c[0]) == 1)
            ) counter--
        });
    });
    return counter
}
const sol2 = () => {
    let airCounter = 0
    for (let i = 2; i < size; i++) {
        for (let j = 2; j < size; j++) {
            for (let k = 2; k < size; k++) {
                if ((cubes.some(x => x[0] == i && x[1] == j && x[2] == k + 1))
                    && (cubes.some(x => x[0] == i && x[1] == j && x[2] == k - 1))
                    && (cubes.some(x => x[0] == i && x[1] == j - 1 && x[2] == k))
                    && (cubes.some(x => x[0] == i && x[1] == j + 1 && x[2] == k))
                    && (cubes.some(x => x[0] == i + 1 && x[1] == j && x[2] == k))
                    && (cubes.some(x => x[0] == i - 1 && x[1] == j && x[2] == k))
                ) airCounter++
            }
        }
    }
    return sol1() - airCounter*6

}

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()