const express = require("express");
const router = express.Router();
const Favorites = require("../models/Favorites");
var cors = require("cors");

router.use(cors());

router.get("/", (req, res, next) => {
  Favorites.findAll()
    .then((data) => res.send(data))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Favorites.create(req.body)
    .then((fav) => {
      res.statusCode = 201;
      res.send(fav);
    })
    .catch(next);
});

module.exports = router;
