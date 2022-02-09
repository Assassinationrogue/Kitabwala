const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },
    publisher: { type: String, required: true },
    price: { type: Number, required: true },
    writer: { type: String, required: true },
    edition: { type: String, required: true },
    type: { type: String, required: true },
    rating: { type: Number, required: false },
    inStock: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
    pages: { type: String, required: true },
    currency: { type: String, required: true },
    language: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    countryOfOrigin: { type: String, required: true },
    isbn10: { type: String, required: true, unique: true, index: { unique: true } },
    isbn13: { type: String, required: true, unique: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: false },
});



const bookModel = mongoose.model('Book',bookSchema,'allBookDetails') 