const mongoose = require('mongoose');

const fieldConfig = mongoose.model('UserInfo', {
    moduleName:{
        fieldName: {
            field: String,
            label: String,
            readonly: Boolean,
            required: Boolean
        }
    }
    
}, 'field_config');


module.exports = fieldConfig;