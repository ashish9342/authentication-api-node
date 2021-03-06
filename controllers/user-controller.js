const JWT = require('jsonwebtoken');
const Emp = require('../models/emp-model');
const keys = require('../config/keys');

signToken = emp => {
  return JWT.sign(
    {
      iss: keys.JWT.iss,
      sub: emp.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    keys.JWT.secret
  );
};

module.exports = {
  signup: async (req, res, next) => {
    const { email, password } = req.value.body;

    // Check is user already exist
    const foundUser = await Emp.findOne({
      email,
    });
    if (foundUser) {
      return res.status(403).json({
        error: 'Employee with email id already exist, Please log in',
      });
    } else {
      const newEmp = new Emp({
        email,
        password,
      });
      await newEmp.save();
      console.log(newEmp);
      const token = signToken(newEmp);
      //respond with token
      //res.json({msg : "New user created"});

      res.status(200).json({
        token,
      });
    }
  },
  signin: async (req, res, next) => {
    //generate the token
    //req.user get the use credentials

    const token = signToken(req.user);
    //console.log(req);
    res.status(200).json({ token });
  },
  secret: async (req, res, next) => {
    console.log('pointer was here');
    res.status(200).json({ secret: 'resources' });
  },
};
