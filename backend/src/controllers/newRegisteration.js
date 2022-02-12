const Registeration = require("../models/user");
const mongoose = require("mongoose");

/**
 * Post user's registeration information if the user is new
 * @param {*} req fetches data from the body
 * @param {*} res sends data on response
 * @param {*} next does nothing
 * @returns void
 */
exports.postRegisteration = (req, res, next) => {
  const register = new Registeration({
    fullName: req.body.fullName,
    emailAddress: req.body.emailAddress?.toLowerCase(),
    password: req.body.password,
  });

  /**
   * Checks if the user is already a registerd
   */
  Registeration.findOne({ emailAddress: register.emailAddress }, (err, doc) => {
    if (!err) {
      if (!doc) {
        register.save((err, doc) => {
          if (!err) {
            res.status(200).send({
              status: "Success",
              statusCode: 200,
              message: `${req.body.fullName} has been successfully registered!`,
            });
          } else {
            console.log(
              `Error in saving the user data! ${JSON.stringify(
                err,
                undefined,
                2
              )}`
            );
          }
        });
      } else {
        res.status(208).send({
          status: "Failed",
          statusCode: 208,
          message: `This email address already exist.`,
        });
      }
    } else {
      console.log(err);
    }
  });
};
