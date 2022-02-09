const productsModel = require("../models/product/products");

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

exports.getBookByName = (req,res,next)=>{
  let isbn = req.body.isbn;
  let bookName = req.body.bookName;
  let searchKey = `books.${bookName}.isbn10`;
  console.log(searchKey)
    console.log(req.body)
    res.send({isbn: req.body.isbn})
    productsModel.find({searchKey:bookName.isbn},(err,doc)=>{
      console.log(doc)
    })
}

exports.getOthersById = (req, res, next) => {
    productsModel.findOne();
}
