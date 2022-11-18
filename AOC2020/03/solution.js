import { realInput, sampleInput } from "./input.js"

const slope = realInput.split('\n');

const slopeLength = slope[0].length;


const sol1 = () => {
    let moveRight = 0;
    let counter = 0
    for (let line of slope) {
        if (line[moveRight % slopeLength] == "#") counter++;
        moveRight += 3
    }
    return counter;
}

const calcTrees = (stepRight, moveDown) => {
    let moveRight = 0;
    let counter = 0
    for (let line = 0; line < slope.length; line += moveDown) {
        if (slope[line][moveRight % slopeLength] == "#") counter++;
        moveRight += stepRight
    }
    return counter;
}

const sol2 = () => [[1, 1], [3,1], [5,1], [7,1], [1,2]]
.map(x=>calcTrees(x[0], x[1]))
.reduce((power, n) => power * n, 1)

const part1 = sol1()
const part2 = sol2()

console.log(part1)
console.log(part2)
