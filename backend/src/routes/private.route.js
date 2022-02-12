/**
 * Router from express module
 */
const Router = require('express').Router();
const loginController = require('../controllers/user');

Router.post("/login", loginController.postUserInfo);
Router.get("/:userName", loginController.getUserInfo);
Router.post("/logout", loginController.postLogout);

module.exports = Router;