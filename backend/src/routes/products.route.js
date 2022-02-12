const Router = require("express").Router();
const productsController = require('../controllers/products');

Router.post("/", productsController.getProducts);
Router.post("/isbn", productsController.getBookByName);
Router.post("/cart", (req, res, next) => {
  res.send({_id:req.body._id});
});

module.exports = Router;
