const functions = require("firebase-functions");

const admin = require("firebase-admin");

const firebase = require("firebase");

const db = firebase.storage();

const signUp = (req, res) => {
  const newUser = {
    firstName: req.body.firstname,
    secondName: req.body.secondname,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };
};

//functie pentru ca sa pot inregistra un utilizator
//functie pentru ca sa pot loga un utilizator
