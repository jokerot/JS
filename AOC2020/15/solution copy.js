
const solution = () => {
  let numbersS = { 0: 1, 3: 2, 6: 3 };
  
  let numbers = {11:1,18:2,0:3,20:4,1:5,7:6,16:7}
  let current = 0;
  let last = 0;

  for (let i = 8; i < 2021; i++) {
    last = current;
    if (numbers[current]) {
      current = i - numbers[current];
    }
    else {
      current = 0
    }
    numbers[last] = i
  }

  return [last, current]
}
console.log(solution());