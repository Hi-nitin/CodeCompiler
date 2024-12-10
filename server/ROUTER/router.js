const express = require('express');
const router = express.Router();
const signup_B = require('../BUSINESS/signup')
const signup_V = require('../VALIDATOR/signup')
const signup_M = require('../MIDDLEWARE/signup')
const login_B = require('../BUSINESS/login')
const login_V = require('../VALIDATOR/login')
const login_M = require('../MIDDLEWARE/login')
const tokenchecker = require('../BUSINESS/tokenchecker')
const codesaver = require('../BUSINESS/codesaver')
const myproject=require('../BUSINESS/myproject')

router.post('/signup', signup_V, signup_M, signup_B)
router.post('/login', login_V, login_M, login_B)
router.get('/tokenchecker', tokenchecker)
router.post('/savemycode', codesaver)
router.get('/myproject',myproject)

module.exports = router