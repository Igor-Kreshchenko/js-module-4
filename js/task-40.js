const atTheOldToad = {
  potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i] === oldName) {
        this.potions[i] = newName;
      }
    }
    // Пиши код выше этой строки
  },
};
