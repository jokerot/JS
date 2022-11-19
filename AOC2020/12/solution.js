import { realInput, sampleInput } from "./input.js"

const input = sampleInput.split('\n').map(x => [x[0], Number(x.slice(1))])


const changeDirection = (direction, turn, degrees) => {
    let left = ['E', 'S', 'W', 'N']
    let right = ['E', 'S', 'W', 'N', 'E', 'S', 'W', 'N']
    return turn == 'R' ? right[left.indexOf(direction) + degrees / 90] : right[left.indexOf(direction) + 4 - degrees/90]
}


const sol1 = input => {
    let x, y = 0;
    let currentDirection = 'E'
    for (let move of input) {
        switch (move[0]) {
            case 'N': y += move[1]
                break;
            case 'S': y -= move[1]
                break;
            case 'E': x += move[1]
                break;
            case 'W': x -= move[1]
                break;
            case 'L':
        }
    }
}

const part1 = changeDirection('E', 'L', 90)
// const part2 = sol2()

console.log(part1)
// console.log(part2)
