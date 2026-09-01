class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
}

let book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
console.log(book1.getSummary());
// Output: The Alchemist by Paulo Coelho (1988)
