// Problem Statement: Library Book Management API
// A college library wants to develop a backend API to manage its book records. Each book contains a title, author,
// category, availability status, and creation date. You are required to build a REST API using Node.js, Express.js, and
// MongoDB with Mongoose to create, retrieve, and update book records.
// Subtasks and Marks
// Subtask 1: Add a New Book — 3 Marks
// Implement POST /api/books to add a book to MongoDB.
// • Create a suitable Mongoose schema and model.
// • Accept title, author, and category in the request body.
// • Validate that the title is provided and return an appropriate response.
// Subtask 2: Retrieve Books with Pagination — 3 Marks
// Implement GET /api/books to retrieve books from MongoDB.
// • Accept page and limit as query parameters.
// • Use skip() and limit() to implement pagination.
// • Return the books along with the current page and total number of records.
// Subtask 3: Update Book Availability — 2 Marks
// Implement PATCH /api/books/:id to update a book's availability status.
// • Accept the new availability status in the request body.
// • Update the record using its MongoDB ID.
// • Return an appropriate error response if the book does not exist
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const bookroutes = require('./routes/bookroutes');
const app = express();
app.use(express.json());

app.use('/api/books', bookroutes);
app.get('/', async(req, res) => {
    return res.status(200).json({
        message : 'Divyanshu Singh 202401100200137 CA2'
    })
})
const startServer = async () => {
    try {
        await connectDB;
        app.listen(process.env.PORT, () => console.log('App is listening...'));
    }
    catch (err) {
        console.log('Error starting the server...');
        process.exit(1);
    }
};
startServer();
