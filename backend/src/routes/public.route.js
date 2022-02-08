/**
 * Router from express module
 */
const Router = require('express').Router();

/**
 * Controllers
 */

const fieldController = require('../controllers/field');
const registerationController = require('../controllers/newRegisteration');
/**
 * Public routes
 */
Router.post("/newRegisteration", registerationController.postRegisteration);
Router.get("/fieldConfig", fieldController.getPublicFieldConfig);


module.exports = Router;