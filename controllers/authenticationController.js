// const express = require("express");
const User = require('../models/user');
// const { createToken } = require("typescript");
const Token = require("../models/token");
const {loginSchema, signupSchema} = require("../models/loginSchema");


const {
    createTokenUser,
} = require("../utils")

const signUp = async (req, res) => {
    try {
        const { error } = signupSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
    
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(409).json({ error: 'User already exists' });
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        });
    
        // Save the user to the database
        await newUser.save();
    
        res.status(201).json({ message: 'Signup successful' });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

const login = async (req, res) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
    
        // Check if the user exists
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        // Check if the password is correct
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!validPassword) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, 'secretkey');
    
        res.json({ token });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }}    


module.exports = {
    login,
    signUp
}