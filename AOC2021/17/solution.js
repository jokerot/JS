const s = `23,-10  25,-9   27,-5   29,-6   22,-6   21,-7   9,0     27,-7   24,-5
25,-7   26,-6   25,-5   6,8     11,-2   20,-5   29,-10  6,3     28,-7
8,0     30,-6   29,-8   20,-10  6,7     6,4     6,1     14,-4   21,-6
26,-10  7,-1    7,7     8,-1    21,-9   6,2     20,-7   30,-10  14,-3
20,-8   13,-2   7,3     28,-8   29,-9   15,-3   22,-5   26,-8   25,-8
25,-6   15,-4   9,-2    15,-2   12,-2   28,-9   12,-3   24,-6   23,-7
25,-10  7,8     11,-3   26,-7   7,1     23,-9   6,0     22,-10  27,-6
8,1     22,-8   13,-4   7,6     28,-6   11,-4   12,-4   26,-9   7,4
24,-10  23,-8   30,-8   7,0     9,-1    10,-1   26,-5   22,-9   6,5
7,5     23,-6   28,-10  10,-2   11,-1   20,-9   14,-2   29,-7   13,-3
23,-5   24,-8   27,-9   30,-7   28,-5   21,-10  7,9     6,6     21,-5
27,-10  7,2     30,-9   21,-8   22,-7   24,-9   20,-6   6,9     29,-5
8,-2    27,-8   30,-5   24,-7`

const ss = s.split('/n').flatMap(x => x.split(/\s+/)).map(x => x.split(',')).sort((a, b) => +a[0] - b[0]);

const sampleInput = {
    x1: 20,
    x2: 30,
    y1: -5,
    y2: -10
}
const realInput = {
    x1: 227,
    x2: 318,
    y1: -53,
    y2: -92
}

const nextStep = (x, y, vX, vY) => {
    let nx, ny, nvX, nvY, sign;
    sign = Math.sign(vX)
    nx = x + vX;
    ny = y + vY;
    nvX = vX > 0 ? vX - 1 : 0
    nvY = vY - 1
    return ({ nx, ny, nvX, nvY })
}

const testHit = (x, y, area) => {
    if (x >= area.x1 && x <= area.x2 && y <= area.y1 && y >= area.y2) return true
    return false
}

const shoot = (vX, vY, area) => {
    let hit = false
    let x = 0;
    let y = 0;
    let trajectory = [[0, 0]]
    while (!hit && x <= area.x2 && y >= area.y2) {
        let obj = nextStep(x, y, vX, vY)
        x = obj.nx
        y = obj.ny
        vX = obj.nvX
        vY = obj.nvY
        hit = testHit(x, y, area)
        trajectory.push([x, y])
    }
    return ({ hit, trajectory })
}
const shoot2 = (vX, vY, area) => {
    let hit = false
    let x = 0;
    let y = 0;
    let trajectory = [[0, 0]]
    while (!hit && x <= area.x2 && y >= area.y2) {
        let obj = nextStep(x, y, vX, vY)
        x = obj.nx
        y = obj.ny
        vX = obj.nvX
        vY = obj.nvY
        if (vX == 0 && !(x >= area.x1 && x <= area.x2)) return ({ hit, trajectory })
        hit = testHit(x, y, area)
        trajectory.push([x, y])
    }
    return ({ hit, trajectory })
}

const velocities = []
// const missing = ss.filter(x=> shoot(x[0], x[1], sampleInput).hit)
const sol1 = (input) => {
    const hitTrajectories = []
    let counter = 0

    for (let i = 0; i <= input.x2; i++) {
        for (let j = -100; j < 1000; j++) {
            let { hit, trajectory } = shoot2(i, j, input)
            if (hit) {
                counter++
                hitTrajectories.push(trajectory)
                let lastCoordinates = trajectory.slice(-1)
                velocities.push([i, j, lastCoordinates])
            }
        }
    }

    return [Math.max(...hitTrajectories.flatMap(x => x.flatMap(y => y[1]))), hitTrajectories.length, counter]
}
console.time()
console.log(sol1(realInput))
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");