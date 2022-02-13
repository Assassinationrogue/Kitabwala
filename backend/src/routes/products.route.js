const Router = require("express").Router();
const productsController = require('../controllers/products');

Router.post("/", productsController.getProducts);
Router.post("/isbn", productsController.getBookByName);
Router.post("/cart", productsController.updateCartByUser);

module.exports = Router;
