const express = require('express');
const router = express.Router();
const User = require('../models/User');

// defines routes

// LOGIN
router.route('/login').post((req, res) =>{
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({email, username, password});

  newUser.save()
         .then(() => res.json('User logged in'))
         .catch(error => res.status(400).json('Error ' + error))
})


module.exports = router;
