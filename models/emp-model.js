const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

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

// create model
//this will pluralize in the mongodb from emp => emps(Check mlab)
const Emp = mongoose.model('emp', empSchema);

//export
module.exports = Emp;
