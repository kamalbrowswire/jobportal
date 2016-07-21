var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({

	fullname :{type : String},
	   email :{type : String , required: true},
     address :{type : String},
        city :{type : String},
     country :{type : String},
    username :{type : String},
    password :{type : String}
});

var User = mongoose.model('register', adminSchema);

module.exports = User;

