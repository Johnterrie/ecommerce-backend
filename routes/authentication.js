const express = require("express");
const router = express.Router(); 
const {signUp, login} = require("../controllers/authenticationController");
const { model } = require("mongoose");


router.route("/signup").post(signUp) 
router.route("/login").post(login)

module.exports = router;
