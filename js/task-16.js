function countTotalSalary(salaries) {
  let totalSalary = 0;
  const allSalaries = Object.values(salaries);

  for (const salary of allSalaries) {
    totalSalary += salary;
  }

  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
