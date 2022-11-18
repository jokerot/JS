import { input1, input2 } from "./input.js";

const sol = input => {
  const regex = /(\d) ([a-z]+ [a-z]+) bags?/g
  const rules = input.split('\n').map(l => ({
    container: l.split(' bags contain ')[0],
    contains: [...l.matchAll(regex)].flatMap(x => [...Array(Number(x[1]))].map(_ => x[2]))
  }))

  const canContain = bag => rules
    .filter(x => x.contains.includes(bag))
    .flatMap(x => [x.container, ...canContain(x.container)])
    .filter((x, i, s) => !s.slice(i + 1).includes(x))

  const mustContain = bag => rules
    .filter(x => x.container === bag)
    .flatMap(x => x.contains)
    .flatMap(x => [x, ...mustContain(x)])

  console.log(canContain('shiny gold').length)
  console.log(mustContain('shiny gold').length)
}
sol(input2);