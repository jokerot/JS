import { realInput, sampleInput } from "./in.js";

const sol = input => {
    const inArray = input.split('\n').map(x => +x)
    for (let i of inArray) {
        let templist = [...inArray];
        templist.splice(inArray.indexOf(i), 1)
        for (let j of templist) {
            let templist2 = [...templist];
            templist2.splice(templist.indexOf(j), 1)
            for (let k of templist2)
                if (i + j + k == 2020) return [i * j * k, i,j,k]
        }
    }
}

console.log(sol(realInput))
