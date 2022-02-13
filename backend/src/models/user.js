const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const Schema = mongoose.Schema;
const types = Schema.Types;

const deliveryAddressSchema = new Schema({
  street1: { type: String, required: true },
  street2: { type: String, required: false },
  pincode: { type: Number, required: true },
});

const userDetailSchema = new Schema({
  dateOfBirth: { type: String, required: true },
  deliveryAddress: deliveryAddressSchema,
  comments: [{ _id: { type: types.ObjectId, ref: "Comments" } }],
});

const userSchema = new Schema({
  password: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true, lowercase: true },
  fullName: { type: String, required: true },
  userDetailSchema: userDetailSchema,
  cart: {
    items: [
      {
        productId: { type: ObjectId, required: true, ref: "Stationary" },
        quantity: { type: Number, required: true },
      },
    ],
  },
});

/**
 * Whenever the save is called this will also get fired along with that so first
 * argument is for that purpose then we need a callback. Do not use arrow function
 * other wise we won't be able to call the 'this' keyword.
 *
 * This middleware is getting fire before saving
 *
 */
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(this.password, salt);
  this.password = hasedPassword;
  next();
});

userSchema.methods.addToCart = function (product){
  const cartProductIndex = this.cart.items.findIndex(cp=>{
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];

  if(cartProductIndex >= 0){
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  }else{
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity
    });
  }
  const updatedCart = {
    items: updatedCartItems
  }
  this.cart = updatedCart;
  return this.save();
}

/**
 * Password decryption
 */
// userSchema.methods.comparePassword = function (password){
//     return bcrypt.compareSync(password, this.password)
// }

module.exports = mongoose.model("Registeration", userSchema);
