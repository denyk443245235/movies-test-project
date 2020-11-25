const express = require('express');
const authRoter = require('./routes/auth');
const passport = require('passport');
const cors = require('cors');
const cookieSession = require('cookie-session');
const cookieParser = require("cookie-parser");
const {
  clientUrl,
  port,
  cookieKey,
  cookieName,
  cookieAge
} = require('./config/keys');

const app = express();
require('./config/passport-settup');

app.use(
  cookieSession({
    name: cookieName,
    keys: [cookieKey],
    maxAge: cookieAge
  })
);

app.use(cors({ credentials: true, origin: clientUrl}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoter);

app.listen(port, () => {
  console.log('Server run!');
});