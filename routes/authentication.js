const express = require("express");
const router = express.Router(); 
const {signUp, login} = require("../controllers/authenticationController");
const { model } = require("mongoose");
const verifyToken = require("../middleware/token")


router.route("/signup").post(verifyToken, signUp) 
router.route("/login").post(verifyToken,  login)

module.exports = router;
