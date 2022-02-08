const Router = require('express').Router();
const trelloDb = require("../utils/database");


Router.post("/",(req,res,next)=>{
    
    res.statusCode = 200;
    res.send("Sending product's list soon");
    console.log(req.body?.category)
})

module.exports = Router;