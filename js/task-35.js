const bookShelf = {
  books: ["Последнее королевство", "Мгла", "Страж снов"],
  updateBook(oldName, newName) {
    const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
  },
};
