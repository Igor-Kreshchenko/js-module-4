// Пиши код ниже этой строки
function findMatches(array, ...args) {
  const matches = [];

  for (const arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }

  return matches;
}

console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
