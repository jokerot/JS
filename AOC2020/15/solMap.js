
const solution = () => {
  
  let numbers = new Map()
  numbers.set(11,1)
  numbers.set(18,2)
  numbers.set(0,3)
  numbers.set(20,4)
  numbers.set(1,5)
  numbers.set(7,6)
  numbers.set(16,7)

  let current = 0;
  let last = 0;

  for (let i = 8; i < 30000001; i++) {
    last = current;
    if (numbers.has(current)) {
      current = i - numbers.get(current);
    }
    else {
      current = 0
    }
    numbers.set(last, i)
  }

  return [last, current]
}
console.log(solution());