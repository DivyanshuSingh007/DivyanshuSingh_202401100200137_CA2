const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 4,
        maxLength: 20,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    availability_status: {
        type: Boolean,
        default: true        
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema);
