const productsModel = require("../models/product/products");
// const userModel = require('../models/user');



/**
 * Fetches all the products from database
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getProducts = (req, res, next) => {
  /**
   * Accepts list of products
   */
  let productsCategory = [];
  let mutatedObj = {};
  let allIdRemoved = { books: {}, others: {} };
  productsModel
    .find()
    .then((products) => {
      /**
       * Assigns list of products
       */
      products.forEach((product) => {
        productsCategory = Object.keys(product["_doc"]);
      });

      /**
       * Filtering id and category
       */
      productsCategory.forEach((category) => {
        if (category !== "_id") {
          if (category !== "category") {
            mutatedObj[category] = products[0]["_doc"][category];
          }
        }
      });

      /**
       * Filtering Id from books and others
       */
      Object.keys(mutatedObj).forEach((category) => {
        Object.keys(mutatedObj[category]["_doc"]).forEach((item) => {
          if (item !== "_id") {
            if (category === "books") {
              allIdRemoved["books"][item] = mutatedObj[category]["_doc"][item];
            } else if (category === "others") {
              allIdRemoved["others"][item] = mutatedObj[category]["_doc"][item];
            }
          }
        });
      });

      res.statusCode = 200;
      res.send(allIdRemoved);
    })
    .catch((err) => {
      console.log(`Failed to retrieve the data: ${err}`);
    });
};

/**
 * Gets book details by book name
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getBookByName = (req, res, next) => {
  const bookName = req.body.bookName;
  const bookFilter = { books: {}, _id: 0 };
  bookFilter.books[bookName] = 1;
  productsModel
    .find({}, bookFilter)
    .then((book) => {
      res.send({
        status: "Success",
        statusCode: 200,
        message: `Data successfully retrieved!`,
        data: book[0]["_doc"]["books"]["_doc"][bookName],
      });
    })
    .catch((err) => {
      res.send({
        status: "Success",
        statusCode: 404,
        message: `Data not found ${err}.`,
        data: [],
      });
    });
};

// exports.updateCartByUser = (req, res, next) => {
  
// };
