const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = new Schema({
    title: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },
    publisher: { type: String, required: true },
    price: { type: Number, required: true },
    writer: { type: String, required: true },
    edition: { type: String, required: true },
    type: { type: String, required: true },
    rating: { type: Number, required: false},
    inStock: { type: Boolean, required: true },
    quantity: { type: Number, required: true},
    pages: { type: String, required: true },
    currency: { type: String, required: true },
    language: { type: String, required: true},
    publicationDate: { type: Date, required: true },
    countryOfOrigin: { type: String, required: true },
    isbn10: { type: String, required: true, unique: true, index: { unique: true }},
    isbn13: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: false },
});

const others = new Schema({ // pen, colors and pencil
    title: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    rating: { type: Number, required: false},
    weight: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    countryOfOrigin: { type: String, required: true },
    unit: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: false },
    setType: { type: String, required: false },
    setQuantity: { type: Number, required: false },
    brand: { type: String, required: true },
    material: { type: String, required: true },
    color: { type: String, required: false },

});


const noteBooks = new Schema({
    title: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    rating: { type: Number, required: false },
    weight: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
    countryOfOrigin: { type: String, required: true },
    unit: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: false },
    ruling: { type: String, required: true },
    asin: { type: String, required: true },
});


const stationary = new Schema({
    books: books,
    others: others,
    noteBooks: noteBooks,
    category: {type: String, default: "stationary"}
});

module.exports = stationary;