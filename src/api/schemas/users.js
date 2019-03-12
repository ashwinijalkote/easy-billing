var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {type: Schema.Types.String, unique:true, required:true},
    password: {type: Schema.Types.String, required:true}
});

module.exports = userSchema;