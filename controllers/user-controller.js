const Emp = require('../models/emp-model');

module.exports = {
  signup : async(req, res, next) => {
    //email and password
    console.log("sign in");
    //******ES 5*******
    // const email = req.value.body.email
    // const password = req.value.body.password
    //******ES 6*******
    const {email, password} = req.value.body;

    //******ES 5*******
    // const newEmp = new Emp({
    //   email : email,
    //   password :password
    // });
    //******ES 6*******
    const newEmp = new Emp({email, password});
    await newEmp.save();

    res.json("New user created")
  },
  signin : async(req, res, next) => {
    //generate the token

  },
  secret : async(req, res, next) => {

  }
}
