const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "The Matrix Trilogy: Cyberpunk Reloaded",
    author: "Stacy Gillis",
    description:"This is a collection of essays on the films as well as the websites, games and The Animatrix video and DVD.",
    image:"https://books.google.com/books?id=bGi9FB3uEXkC&printsec=frontcover&dq=editions:d3IhAp4y_L4C&hl=en&sa=X&ved=2ahUKEwj7mIyj4_bjAhXszVkKHZ-WDlgQ6wEwAHoECAAQAQ",
    link: "https://books.google.com/books?isbn=1904764320",
      date: new Date(Date.now())
  },
  {
    title: "Lord of the Rings: Tolkiens World Audiences",
    author: "Martin Barker, Ernest Mathijs -2008",
    description:"This book presents findings from the largest film audience project ever undertaken, drawing from 25,000 questionnaire responses and a wide array of other materials. ",
    image:"https://books.google.com/books?id=5XOL49zCAHEC&printsec=frontcover&dq=lord+of+the+rings&hl=en&sa=X&ved=2ahUKEwj2q47F5fbjAhUxrVkKHe6kCZwQ6wEwA3oECAQQAQ",
    link:"https://books.google.com/books?isbn=0820463965",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
