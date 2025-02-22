const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Web Applications Development - Spring 2025: Assignment 1");
});

app.use(express.json());

let books = [
    { id: 1, title: "Book 1", author: "Book 1 Author" },
    { id: 2, title: "Book 2", author: "Book 2 Author" },
    { id: 3, title: "Book 3", author: "Book 3 Author" },
];

// get all books
app.get("/books", (req, res) => {
    res.json(books);
});

// add a new book
app.post("/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// get a single book by id
app.get("/books/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found");
    res.json(book);
});

// update a book by id
app.put("/books/:id", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send("Book not found");

    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// delete a book by id
app.delete("/books/:id", (req, res) => {
    const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send("Book not found");

    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook);
});

app.listen(port, () => {
    console.log(`The app listening on http://localhost:${port}`);
});
