import { realInput, sampleInput } from "./input.js";
console.time()
const regex = /Valve (\w\w) has flow rate=(\d+); tunnel[s]? lead[s]? to valve[s]? (.*)/g
const valves = realInput.split('\n')
    .map(x => [...x.matchAll(regex)][0].slice(1))
    .map(y => ([y[0], y[1], y[2].split(', ')]))

let maxScore = 0
const objValves = valves.reduce((obj, x) => ({ ...obj, [x[0]]: { value: x[1], connectedValves: x[2] } }), {})
let allSolutions = []
const nextStep = (currValve, movesLeft, lastValve, currentValvesObj, currScore) => {
    movesLeft--
    if (movesLeft <= 1 || checkValvesAllOpen(currentValvesObj)) {
        if (maxScore < currScore) {
            maxScore = currScore
            console.log("Max1", maxScore)
        }
        return
    }

    if (currentValvesObj[currValve].value > 0) {
        const tempMoves = movesLeft - 1
        const tempScore = currScore + currentValvesObj[currValve].value * movesLeft
        const tempValvesObj = JSON.parse(JSON.stringify(currentValvesObj))
        tempValvesObj[currValve].value = 0
        currentValvesObj[currValve].connectedValves.forEach(v => {
            nextStep(v, tempMoves, currValve, tempValvesObj, tempScore)
        });
        
    }

    currentValvesObj[currValve].connectedValves.forEach(v => {
        if (v != lastValve)
            nextStep(v, movesLeft, currValve, JSON.parse(JSON.stringify(currentValvesObj)), currScore)
    });


    if (movesLeft <= 1) {
        if (maxScore < currScore) {
            maxScore = currScore
            console.log("Max2", maxScore)
        }
        return
    }
}

const checkValvesAllOpen = (v) => {
    for (const key in v) {
        if (v[key].value > 0) return false
    }
    return true
}

nextStep("AA", 31, '', objValves, 0)
console.log("FINAL ANSWER:", maxScore)

// allSolutions.sort((a, b) => a[0] - b[0])


console.timeEnd()