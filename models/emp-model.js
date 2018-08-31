const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

//create schema
const empSchema = new Schema({
  email: String,
  password: String
});

// create model
const Emp = mongoose.model('emp', empSchema);

//export
module.exports = Emp;
