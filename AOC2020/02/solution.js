import { realInput, sampleInput } from "./input.js"

const regex = /(\d+)-(\d+) ([a-z]): (\w*)/g
const sol = input => input.split('/n')
    .flatMap(x=>[...x.matchAll(regex)])
    .map(x=>[+x[1], +x[2], x[4].split(x[3]).length-1])
    .filter(x => x[0] <= x[2] && x[2] <= x[1])
    .length

const sol2 = input => input.split('/n')
    .flatMap(x=>[...x.matchAll(regex)])
    .map(x=>[x[4][x[1]-1], x[4][x[2]-1], x[3]])
    .filter( x => Boolean(!(x[0] == x[2]) ^ !(x[1] == x[2])))
    .length


console.log(sol(sampleInput))    
console.log(sol(realInput))    
console.log(sol2(sampleInput))    
console.log(sol2(realInput))    