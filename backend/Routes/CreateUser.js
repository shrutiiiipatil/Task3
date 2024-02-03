const express = require("express");
const User = require("../models/Users");
const LoginHistory = require("../models/LoginHistory");
const bodyParser = require('body-parser');
const useragent = require('express-useragent');
const requestIp = require('request-ip');
const mongoose = require('mongoose');

const router = express.Router();
router.use(requestIp.mw());
router.use(useragent.express());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static('public'))
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const jwtSecret = "Myguijaksolp#hrjrondklsllamnjsudkemklslwkkwoeiej#$";

router.use((req, res, next) => {
  const ipAddress = req.clientIp;
  const os = req.useragent.os || 'Unknown';
  const browser = req.useragent.browser || 'Unknown';

  req.userDetails = { ipAddress, os, browser };
  next();
});

router.post('/createuser', [
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password", "Incorrect Password").isLength({ min: 5 }),
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      return res.json({ success: true });
    } catch (error) {
      console.error(error);
      return res.json({ success: false });
    }
  }
);

router.post('/loginuser', async (req, res) => {
  const { email, password } = req.body;
  const { ipAddress, os, browser } = req.userDetails;

  try {
    const userData = await User.findOne({ email });

    if (!userData) {
      return res.status(400).json({ success: false, errors: "Invalid credentials" });
    }

    const pwdCompare = await bcrypt.compare(password, userData.password);

    if (!pwdCompare) {
      return res.status(400).json({ success: false, errors: "Invalid credentials" });
    }

    // Create a new LoginHistory entry for each login
    await LoginHistory.create({
      
      email: email,
      ipAddress: ipAddress,
      os: os,
      browser: browser,
    });

    const data = {
      user: {
        id: userData.id,
      },
    };

    const authToken = jwt.sign(data, jwtSecret);
    return res.json({ success: true, authToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, errors: "Internal server error" });
  }
});
router.get('/myhistory', async (req, res) => {
  try {
    const loginHistory = await LoginHistory.find().sort({ loginTime: -1 });
    res.json(loginHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;







