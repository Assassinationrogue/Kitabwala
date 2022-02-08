const express = require("express");
const bodyParser = require("body-parser");
const database = require("../src/utils/database");
const publicRoutes = require("./routes/public.route");
const privateRoutes = require("./routes/private.route");
const productsRoutes = require('./routes/products.route');
const session = require("express-session");
const config = require("./utils/config");
const MongoDBStore = require("connect-mongodb-session")(session); // passing session

const expressApp = express();
const store = new MongoDBStore({
  uri: config.uri,
  collection: "sessions",
});

expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());
expressApp.use(
  session({
    secret: "eiT0DXxcH7jjI1VP8",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
); // resave wont save on every request done only if something change in session
// cookie can also be configured

expressApp.use("/api/public", publicRoutes);
expressApp.use("/user", privateRoutes);
expressApp.use("/products", productsRoutes);

module.exports = expressApp;
