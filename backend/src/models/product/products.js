const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const stationaryModel = require('./stationary/stationary');

// const product = new Schema({
//     stationary:[stationaryModel]
// })


module.exports = mongoose.model('Stationary', stationaryModel, 'products');