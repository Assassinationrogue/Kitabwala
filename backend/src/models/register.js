const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    password: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true, lowercase: true },
    fullName: { type: String, required: true },
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
    if(!this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(this.password, salt);
    this.password = hasedPassword;
    next();
});

/**
 * Password decryption
 */
// userSchema.methods.comparePassword = function (password){
//     return bcrypt.compareSync(password, this.password)
// }



module.exports = mongoose.model("Registeration", userSchema);
