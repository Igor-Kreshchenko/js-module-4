function add(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
}

console.log(add(12, 4, 11, 48));
