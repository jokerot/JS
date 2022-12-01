const sum = (n) => n > 0 ? sum(n - 1) + n : 0

console.log(sum(100))

const s = [...Array(101).keys()].reduce((s, n) => s + n, 0)

console.log(s);