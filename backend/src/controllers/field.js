const fieldModel = require('../models/fieldConfig');


/**
 * Gets field config
 * @param {*} req not used
 * @param {*} res sending parsed json on sucessfully fetching data from database
 * @param {*} next not used
 * @returns void
 */
exports.getPublicFieldConfig = (req, res, next) => {
    const moduleName = [];
    const multatedObj = {};
    fieldModel.find((err, doc) => {
        doc.forEach(data=>{
            let currentModule = Object.keys(data['_doc'])[2];
            multatedObj[currentModule] = data['_doc'][currentModule];
        });       
        if (!err) { res.send(multatedObj); }
        else (res.status(404));
    }, {_id:0});
};
