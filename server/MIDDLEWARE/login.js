const { validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    // Extract validation errors from the request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // If there are errors, send them in the response
        return res.status(400).json({ errors: errors.array() });
    }

    // If no errors, proceed to the next middleware
    next();
};

module.exports = handleValidationErrors;
