const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");
var cors = require("cors");

router.use(cors());


router.post("/register", (req, res, next) => {
    const { email } = req.body;
    User.findOne({ where: { email } }).then((user) => {
      if (user) {
        res.status(400).send("ya hay un usuario con ese email");
      } else {
        User.create(req.body)
          .then((newuser) => {
            res.statusCode = 201;
            res.send(newuser);
          })
          .catch(next);
      }
    });
  });
  
  router.post("/login", passport.authenticate("local"), function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });
  
  
  router.get("/logout", (req, res) => {
    res.send(req.logout());
  });
  
  // Don´t modify this route, keep it at the bottom.
  router.use("/", function (req, res) {
    res.sendStatus(404);
  });


module.exports = router