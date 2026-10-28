const Book = require('../models/Book');

// Subtask 1: Add a New Book — 3 Marks
// Implement POST /api/books to add a book to MongoDB.
// • Create a suitable Mongoose schema and model.
// • Accept title, author, and category in the request body.
// • Validate that the title is provided and return an appropriate response.
const addBook = async (req, res) => {
    try {
        const { title, author, category } = req.body;
        if (!title || !author || !category) {
            return res.status(400).json({
                message: 'Either title or author or category is not entered'
            });
        }
        const book = Book.create({
            title: title,
            author: author,
            category: category,
            created_At : Date.UTC
        });
        res.status(201).json(
            book,
            { message: 'Book Successfully added...' }
        );
    }
    catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
};
// Subtask 2: Retrieve Books with Pagination — 3 Marks
// Implement GET /api/books to retrieve books from MongoDB.
// • Accept page and limit as query parameters.
// • Use skip() and limit() to implement pagination.
// • Return the books along with the current page and total number of records.

const getBooks = async (req, res) => {
    try {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);
        if (!page || !limit) {
            return res.status(400).json({
                message: 'Invalid page and limit entered !!!'
            });
        }
        const skip = (page - 1) * limit;
        const books = Book.find().skip(skip).limit(limit);
        if (!books) {
            return res.status(400).json({
                message: 'No record found'
            });
        }
        return res.status(200).json({
            current_page: page,
            total: books.length,
            books
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
};
// Subtask 3: Update Book Availability — 2 Marks
// Implement PATCH /api/books/:id to update a book's availability status.
// • Accept the new availability status in the request body.
// • Update the record using its MongoDB ID.
// • Return an appropriate error response if the book does not exist
const updateBook = async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (!id) {
            return res.status(400).json({
                message: 'Id was not entered !!!'
            });
        }
        const book = Book.findById(id);
        if (!book) {
            return res.status(400).json({
                message: 'Book not found !!!'
            });
        }
        const availability_status = req.body.availability_status;
        const record = Book.updateById(id,
            { availability_status: availability_status }
        );
        return res.status(200).json(
            record,
            { message: 'Book availability status successfully updated...' }
        )
    }
    catch (err) {
        res.status(400).json({
            message : err.message
        })
    }
};
module.exports = { addBook, getBooks, updateBook };