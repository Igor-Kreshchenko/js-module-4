const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this[position - 1].dish} для ${
    this[position - 1].email
  }. Ваш заказ ${position}-й в очереди.`;
}

console.log(composeMessage.call(orders, 2));

const messages = [].map.call(orders, composeMessage());

console.log(messages);
