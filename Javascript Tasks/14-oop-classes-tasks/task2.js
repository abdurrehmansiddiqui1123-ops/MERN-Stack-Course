class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(book.title + " added to library");
  }

  listBooks() {
    this.books.forEach(book => {
      console.log(book.getSummary());
    });
  }
}

let myLibrary = new Library();
let book2 = new Book("1984", "George Orwell", 1949);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();
// Output: The Alchemist by Paulo Coelho (1988)
//         1984 by George Orwell (1949)
