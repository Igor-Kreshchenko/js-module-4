const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

console.log(orders[0].dish);

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this[position - 1].dish} для ${
    this[position - 1].email
  }. Ваш заказ ${position}-й в очереди.`;
}

console.log(composeMessage.call(orders, 2));

const messages = orders.map(function (callback, index, array) {
  callback(composeMessage.call(orders, index));
});

console.log(messages);
