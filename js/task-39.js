const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i] === potionName) {
        this.potions.splice(i, 1);
      }
    }

    return this.potions;
    // Пиши код выше этой строки
  },
};

console.log(atTheOldToad.removePotion("Дыхание дракона"));
console.log(atTheOldToad.removePotion("Зелье скорости"));
