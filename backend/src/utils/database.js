const mongoose = require('mongoose');
const config = require('./config');



mongoose.connect(
    config.uri,((err)=>{
        if(!err) { console.log('Connected to Trello database!') }
        else {console.log('Connection to Trello database failed')}
    })
)


module.exports = mongoose;