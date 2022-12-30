import { jets } from "./input.js";
console.time()

const rocks = [
    [[0, 0], [0, 1], [0, 2], [0, 3]], // -
    [[0, 1], [1, 0], [1, 1], [1, 2], [2, 1]], // +
    [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]], // invert L
    [[0, 0], [1, 0], [2, 0], [3, 0]], // I
    [[0, 0], [0, 1], [1, 0], [1, 1]] // square
]

const moveLeft = (rock, posX, posY) => {
    return rock.map(x => [x[0] - 1 + posX, x[1] + posY])
}
const moveRight = (rock, posX, posY) => {
    return rock.map(x => [x[0] + 1 + posX, x[1] + posY])
}
const moveDown = (rock, posX, posY) => {
    return rock.map(x => [x[0] + posX, x[1] + posY - 1])
}

console.log(moveLeft(rocks[0], 2, 3))

const sol1 = () => 1
const sol2 = () => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()