const express = require("express");
const router = express.Router();
const favorites = require("../routes/fav");
const users = require("../routes/users");
const auth = require("../routes/auth");
var cors = require("cors");

router.use(cors());

router.use("/fav", favorites);
router.use("/users", users)
router.use("/auth", auth)



module.exports = router;
