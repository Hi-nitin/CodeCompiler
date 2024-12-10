const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserRegister',
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectCode: {
        type: String,
        required: true,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});
const myproject = mongoose.model('UserProject', projectSchema);

module.exports = myproject;
