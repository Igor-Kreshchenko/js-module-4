function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);

  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
}

console.log(countProps({ name: "Mango", age: 2 }));
