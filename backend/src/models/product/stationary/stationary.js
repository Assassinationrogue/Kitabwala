const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const books = new Schema({
    title: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },
    publisher: { type: String, required: true },
    price: { type: Number, required: true },
    writer: { type: String, required: true },
    edition: { type: String, required: true },
    type: { type: String, required: true },
    rating: { type: Number, required: false, default: 0 },
    inStock: { type: boolean, required: true },
    quantity: { type: Number, required: true, default: 0 },
    pages: { type: String, required: true },
    currency: { type: String, required: true },
    language: { type: String, required: true, default: "English" },
    publisher: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    countryOfOrigin: { type: String, required: true },
    isbn_10: { type: String, required: true },
    isbn_13: { type: String, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: false },
});

const pencil = new Schema({

});


const pen = new Schema({

});

const waterColor = new Schema({

});

const oilColor = new Schema({

});

const paintBrush = new Schema({

});

const notePads = new Schema({

});

const paintBrush = new Schema({

});

const geomatryItems = new Schema({

});

const sharpner = new Schema({

});


const stationary = new Schema({
    books: [books],
    pencil: [pencil],

});

module.exports = stationary;