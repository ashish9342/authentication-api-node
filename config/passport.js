const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const keys = require('./keys');
const Emp = require('../models/emp-model')

//console.log(keys);
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: keys.JWT.secret
  },
  async (payload, done) => {
    try {
      //find specify signToken
      const emp = await Emp.findById(payload.sub);

      //if user doesn't exist handle it
      if (!emp) {
        return done(null, false)
      }

      //otherwise return the user
      done(null, emp)

    } catch (error) {
      done(error, false);
    }

  }));
