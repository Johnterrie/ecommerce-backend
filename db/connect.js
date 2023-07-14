const express = require("express");
const mongoose = require("mongoose");

const uri =
  "";

  const connectDB = async () => {
  const db = mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });

  return db;
};

module.exports = connectDB;
