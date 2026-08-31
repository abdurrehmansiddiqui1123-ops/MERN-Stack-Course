// TASK 2 - Book object banao (title, author, year), author print karo
let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988
};
console.log(book.author);   // Output: Paulo Coelho


// TASK 3 - Book object mein "pages" property add karo
book.pages = 197;
console.log(book);
// Output: { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988, pages: 197 }


// TASK 4 - Book object se "year" property delete karo
delete book.year;
console.log(book);
// Output: { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197 }

// TASK 6 - Book object pe Object.keys(), values(), entries() use karo
console.log(Object.keys(book));
// Output: ['title', 'author', 'pages']

console.log(Object.values(book));
// Output: ['The Alchemist', 'Paulo Coelho', 197]

console.log(Object.entries(book));
// Output: [['title','The Alchemist'], ['author','Paulo Coelho'], ['pages',197]]

