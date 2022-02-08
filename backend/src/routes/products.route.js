const Router = require("express").Router();
const productsController = require('../controllers/products');

Router.post("/", productsController.getProducts);
Router.post("/isbn", productsController.getBookByName);

module.exports = Router;
