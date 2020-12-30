// Пиши код ниже этой строки
function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number) {
      total += arg;
    }
  }

  return total;
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
