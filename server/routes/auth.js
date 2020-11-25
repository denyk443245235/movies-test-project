var express = require("express");
var router = express.Router();
var passport = require("passport");
const { clientUrl } = require('../config/keys');

router.get('/isUserAuthorized', (req, res) => {
  res.send(req.user);
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect(`${clientUrl}/dashboard`);
  }
);

router.get("/logout",
  (req, res) => {
    req.logout();
    res.redirect(`${clientUrl}/auth` );
  }
);

module.exports = router;
