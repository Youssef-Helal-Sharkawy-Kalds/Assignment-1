const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Web Applications Development - Spring 2025: Assignment 1");
});

app.listen(port, () => {
    console.log(`The app listening on http://localhost:${port}`);
});
