import { realInput, sampleInput } from "./input.js";
console.time()
const regex = /Valve (\w\w) has flow rate=(\d+); tunnel[s]? lead[s]? to valve[s]? (.*)/g
const valves = sampleInput.split('\n')
    .map(x => [...x.matchAll(regex)][0].slice(1))
    .map(y => ([y[0], y[1], y[2].split(', ')]))

const objValves = valves.reduce((obj, x) => ({ ...obj, [x[0]]: { value: x[1], connectedValves: x[2] } }), {})
const allSolutions = []
const nextStep = (currValve, movesLeft, lastValve, currentValvesObj, currentMovesArr, currScore) => {
    movesLeft--
    if (movesLeft <= 1) {
        // console.log(currScore)
        allSolutions.push([currScore, currentMovesArr])
        return
    }

    if (currScore += currentValvesObj[currValve].value > 0) {
        movesLeft--
        currScore += currentValvesObj[currValve].value * movesLeft
        const temp = currentValvesObj[currValve].value
        currentValvesObj[currValve].value = 0
        currentValvesObj[currValve].connectedValves.forEach(v => {
            if (v != lastValve)
                nextStep(v, movesLeft, currValve, { ...currentValvesObj }, [...currentMovesArr, v], currScore)
        });
        movesLeft++
        currentValvesObj[currValve].value = temp
    }

    currentValvesObj[currValve].connectedValves.forEach(v => {
        if (v != lastValve)
            nextStep(v, movesLeft, currValve, { ...currentValvesObj }, [...currentMovesArr, v], currScore)
    });

    if (movesLeft <= 1) {
        // console.log(currScore)
        allSolutions.push([currScore, currentMovesArr])
        return
    }
}

const checkValvesAllOpen = (v) => {
    for (const key in v) {
        if (v[key].value > 0) return false
    }
    return true
}

nextStep("DD", 30, 'AA', objValves, ["AA"], 0)

allSolutions.sort((a,b) => a[0] - b[0])

const sol1 = () => 1
const sol2 = () => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()