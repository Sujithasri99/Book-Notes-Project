const express = require("express");
const router = express.Router();
const model = require("../models/Book.js");
const axios = require("axios");

router.get("/books", (req, res) => {
    model.find()
    .then( (books) => {
        res.json(books)
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).send("Error retrieving books");
    })
});

router.post("/books", (req, res) => {
    const bookData = req.body;
    const bookTitle = req.body.title;
    axios.get("https://openlibrary.org/search.json?title=" + bookTitle )
    .then((response) => {
        const cover = response.data.docs[0];
        const cover_id = cover?.cover_i;
        const imgUrl = cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : null;
        bookData.coverImgUrl = imgUrl;
        const newBook = new model(bookData);
        newBook.save()
        .then((book) => {
        res.status(201).json({ message: "Book added successfully", book });
        })
        .catch(err => {
        console.log(err.message);
        res.status(500).send("Error adding book");
        })
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).send("Error fetching cover image");
    });
  
});

router.put("/books/:id", (req, res) => {
    const bookData = req.body;
    const bookId = req.params.id;
    model.findByIdAndUpdate(bookId, bookData, {new: true})
    .then((book) => {
        res.status(200).json({ message: "Book updated successfully", book });
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).send("Error updating book");

    })
});

router.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    model.findByIdAndDelete(bookId)
    .then(() => {
        res.status(200).json({ message: "Book deleted successfully" });
    })
    .catch(err => {
        console.log(err.message);
        res.status(500).send("Error deleting book");

    })
});

module.exports = router;