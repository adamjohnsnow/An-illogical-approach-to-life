var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testDB = "mongodb://localhost/RPGDB"

mongoose.connect(testDB)

var userSchema = new Schema({
  email: { type: String, unique : true, required : true },
  password: String
});

var User = mongoose.model('User', userSchema);
module.exports = User;
