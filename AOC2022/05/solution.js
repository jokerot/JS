import { realInput, sampleInput, stacks2 } from "./input.js";

const fillStacks = () => {
    const arrStacks = [[], [], [], [], [], [], [], [], []]
    stacks2.split('\n').forEach(element => {
        for (let i = 0; i <= 8; i++) {
            const crate = element.slice(i * 4, i * 4 + 3).trim()
            if (crate) arrStacks[i].unshift(crate)
        }
    });
    return arrStacks
}

const moves = realInput.split('\n').map(x => {
    const g = [...x.matchAll(/move (\d+) from (\d) to (\d)/g)][0]
    return [+g[1], +g[2] - 1, +g[3] - 1]
})

const sol1 = () => {
    const startStacks = fillStacks()

    moves.forEach(m => {
        for (let i = 0; i < m[0]; i++) {
            const temp = startStacks[m[1]].pop();
            startStacks[m[2]].push(temp);
        }
    });

    return startStacks.reduce((str, x) => str + x.slice(-1)[0][1], '')
}
const sol2 = () => {
    const startStacks = fillStacks()

    moves.forEach(m => {

        const temp = startStacks[m[1]].splice(-m[0]);
        startStacks[m[2]] = [...startStacks[m[2]], ...temp];

    });

    return startStacks.reduce((str, x) => str + x.slice(-1)[0][1], '')
}

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')