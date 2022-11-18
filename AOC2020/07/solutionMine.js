import { input1, input2 } from "./input.js"


const doIt = input => {
  const regex = /(\d+) ([a-z]+ [a-z]+) bags?/g;
  const rules = input.split('\n').map(line => ({
    container: line.split(' bags contain ')[0],
    contains: [...line.matchAll(regex)].flatMap(x => [...Array(Number(x[1]))].map(_ => x[2]))
  }))

  const canContain = bag => rules
  .filter(x => x.contains.includes(bag))
  .flatMap(x => [x.container, ...canContain(x.container)])
  .filter((x,i,s) => !s.slice(i+1).includes(x))

  // return [part1, part2]
  return canContain('shiny gold').length;

}
// const regex = /(\d+) ([a-z]+ [a-z]+) bags?/g;
console.log(doIt(input1))
// console.log([...'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags'.matchAll(regex)])