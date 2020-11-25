const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const {
  googleClientID,
  googleClientSecret,
  serverUrl
} = require('./keys');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID : googleClientID ,
    clientSecret : googleClientSecret,
    callbackURL: `${serverUrl}/auth/google/callback`
  },
  (accessToken, tokenSecret, profile, done) => {
    User.findOrCreate({ googleId: profile.id },(err, user) => {
      return done(err, {
        name: profile.displayName,
        token: accessToken
      });
    });
  }
));