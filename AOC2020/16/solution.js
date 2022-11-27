import { realInput, sampleInput, sampleInput2 } from "./input.js"

const regex = /\s?([a-z\s]+): (\d+)-(\d+) or (\d+)-(\d+)/g

const makeArray = (x, y) => {
  const arr = []
  for (let i = x; i <= y; i++) {
    arr.push(i)
  }
  return arr
}

const transpose = m => m[0].map((x, i) => m.map(x => x[i]))

const fullRange = sampleInput.fields.split('\n').map(x => {
  const m = [...x.matchAll(regex)][0];
  return [...makeArray(+m[2], +m[3]), ...makeArray(+m[4], +m[5])]
}).reduce((arr, x) => [...arr, ...x], [])

const fullRange2 = realInput.fields.split('\n').map(x => {
  const m = [...x.matchAll(regex)][0];
  return [...makeArray(+m[2], +m[3]), ...makeArray(+m[4], +m[5])]
}).reduce((arr, x) => [...arr, ...x], [])

const outOfRange = realInput.nearbyTickets
  .split('\n').flatMap(x => x.split(',').map(y => +y))
  .filter(x => !fullRange.includes(x))
  .reduce((sum, x) => sum + x, 0)

const validTickets = [...realInput.nearbyTickets
  .split('\n'), realInput.yourTicket].map(x => x.split(',').map(y => +y))
  .filter(x => x.every(y => fullRange2.includes(y)))


const fields = realInput.fields.split('\n').map(x => {
  const m = [...x.matchAll(regex)][0];
  return ({ [m[1].trim()]: [...makeArray(+m[2], +m[3]), ...makeArray(+m[4], +m[5])] })
})
  .reduce((obj, x) => Object.assign(obj, x), {})

const getOrder = () => {
  const t = transpose(validTickets);
  const order = []
  t.forEach(x => {
    let k = Object.keys(fields)
    k.forEach(y => {
      if (x.every(z => fields[y].includes(z))) { order.push(y)}
    })
  });
  return order
}

const o = getOrder()

const ticket = o.map((x, i)=> ({[x]: +realInput.yourTicket.split(',')[i]}))

console.log(outOfRange);