const express = require("express");
const User = require('../models/user');


const signUp = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(401).json({ message: 'Enter email and Password'});;
    }

    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(401).json({ message: 'Invalid Credentials'});
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    
}

const login = async (req, res) => {
    res.send('login is also working')
}    


module.exports = {
    login,
    signUp
}