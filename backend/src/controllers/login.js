const Registeration = require("../models/register");
const bcrypt = require("bcrypt");
const url = require("url");
let userId;
/**
 *  Accepts and creates new user information in database
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next function to use next route
 */
exports.postUserInfo = (req, res, next) => {
  let loadedUser;
  Registeration.findOne(
    { emailAddress: req.body.emailAddress?.toLowerCase() },
    { details: 0 },
    async (err, doc) => {
      console.log(doc);

      if (!err) {
        if (doc) {
          loadedUser = doc;
          let isAuthenticated = await bcrypt.compare(
            req.body.password,
            doc.password
          );
          if (isAuthenticated) {
            req.session.user = loadedUser;
            // res.cookie('email', `${loadedUser.emailAddress}`, { httpOnly: true });
            req.session.cookie.httpOnly = true;
            res.send({
              status: "success",
              statusCode: 200,
              message: `Welcome ${doc.fullName}`,
            });
          } else {
            res
              .status(401)
              .send({
                status: "Failed",
                statusCode: 401,
                message: "Wrong password.",
              });
          }
        } else {
          res.status(208).send({
            status: "Failed",
            statusCode: 208,
            message: `This email do not exist. Please, create one.`,
          });
        }
      } else {
        console.log("Failed to retrieve the data");
      }
    }
  );
};
exports.getUserInfo = (req, res, next) => {
  const userName = req.dataProcessed;
  console.log(userName);
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.send({
      status: "success",
      statusCode: 200,
      message: "User logged out!",
    });
  }); // the callback function will get called once destroying the session is done
};
