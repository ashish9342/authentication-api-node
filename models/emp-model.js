const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const bcrypt = require('bcryptjs');

//create schema
const empSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

empSchema.pre('save', async function(next) {
  try {
    //generate a salt
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    // generate a hashed password (hash + salt)
    const passwordHash = await bcrypt.hash(this.password, salt);
    // console.log(this.password);
    // console.log(passwordHash);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

empSchema.methods.isValidPassword = async function(newPassword){
  try{
    //compare the plain password  with encrypted password
    // newPassword is entered by user while logging in
    console.log("isValidPassword");
    return await bcrypt.compare(newPassword, this.password);
  }
  catch(error){
    throw new Error(error)
  }
}
// create model
//this will pluralize in the mongodb from emp => emps(Check mlab)
const Emp = mongoose.model('emp', empSchema);

//export
module.exports = Emp;
