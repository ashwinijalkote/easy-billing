var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const userSchema = require('../schemas/users');
const crypto = require('crypto');


router.post('/', function(req, res) {
    if (!userSchema.options.toJSON) userSchema.options.toJSON= {};
    userSchema.options.toJSON.transform = (doc, ret, options) => {
        delete ret._id;
        delete ret.password;
        return ret;
    }
    var userModel = mongoose.model('Users', userSchema);

    var hashedPassword = crypto.createHmac('sha256', 'ERHBJNknkdbjTY123').update(req.body.password).digest('base64');
    var u = new userModel({username:req.body.username, password: hashedPassword});
    async function saveAndRespond(){
        try {
            var data = await u.save();
            res.json(data)
        }catch (e) {
            res.status(400).json(e.errmsg)
        }
    }
    saveAndRespond()
});

module.exports = router;