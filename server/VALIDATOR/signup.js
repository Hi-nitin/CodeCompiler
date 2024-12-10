const { body } = require('express-validator');

const validateSignup = [
  body('firstname')
    .notEmpty().withMessage('First name is required')
    .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),
  
  body('lastname')
    .notEmpty().withMessage('Last name is required')
    .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long'),
  
  body('username')
    .notEmpty().withMessage('Username is required')
    .isAlphanumeric().withMessage('Username must be alphanumeric')
    .isLength({ min: 4 }).withMessage('Username must be at least 4 characters long'),
  
  body('password')
    .notEmpty().withMessage('Password is required')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  
  body('cpassword')
    .notEmpty().withMessage('Confirm password is required')
    .custom((value, { req }) => value === req.body.password).withMessage('Passwords must match'),
];

module.exports =  validateSignup;
