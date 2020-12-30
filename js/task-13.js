const apartment = {
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
};

const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);
