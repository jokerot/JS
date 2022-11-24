
const solution = () => {
  let numbers = { 0: 1, 3: 2, 6: 3 };
  
  let numbers2 = {11:1,18:2,0:3,20:4,1:5,7:6,16:7}
  let current = 0;
  let last = 0;

  for (let i = 8; i < 30000000; i++) {
    last = current;
    if (current.toString() in numbers) {
      current = i - numbers[current];
    }
    else {
      current = 0
    }
    numbers[last] = i
    console.log(i, last);
  }

  return [last, current]
}
console.log(solution());