var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: Schema.Types.String, unique:true},
    password: String
});

module.exports = userSchema;