const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res, next) => {
    User.findAll()
      .then((data) => res.send(data))
      .catch(next);
  });


module.exports = router