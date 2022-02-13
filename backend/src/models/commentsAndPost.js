const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const types = Schema.Types;


const userComment = new Schema({
  _id: { type: types.ObjectId, auto: true },
  text: { type: types.String, required: true },
  postedOn: { type: Date.now, auto: true },
  postedBy: { type: types.ObjectId },
});

exports.commentModel = mongoose.model('Comment', userComment, 'userComment');

const post = new Schema({
    _id: {type: types.ObjectId, auto: true},
    text: {type: types.String, required: true},
    imageUrl: {type: types.String, required: false},
    postedOn: {type: new Date(), auto: true },
    postedBy: { type: types.ObjectId },
    commetByOtherUser: [{type: types.ObjectId, required: false}]
})

exports.post = mongoose.model('Post',post,'userPost');

console.log(mongoose.modelNames)

