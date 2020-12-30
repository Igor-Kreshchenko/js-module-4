const bookShelf = {
  books: ["Последнее королевство", "Страж снов"],
  getBooks() {
    return "Возвращаем все книги";
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
};
