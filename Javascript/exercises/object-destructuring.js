const book = { 
    title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald", 
    year: 1925, 
}; 

console.log(book.title, book.author, book.year); 

const {title, author, year} = book;
console.log(title, author, year);

const {title: bookTitle, author: writer} = book;
console.log(bookTitle, writer);
