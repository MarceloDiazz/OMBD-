const express = require("express");
const router = express.Router();
const users = require("../routes/users");
const auth = require("../routes/auth");
var cors = require("cors");

router.use(cors());

router.use("/users", users)
router.use("/auth", auth)



module.exports = router;
